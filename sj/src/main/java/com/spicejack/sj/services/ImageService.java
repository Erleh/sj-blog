package com.spicejack.sj.services;

import com.spicejack.sj.general.dto.ImagePathListDto;
import com.spicejack.sj.repositories.ImagePathRepository;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Objects;
import java.util.UUID;

@Service
public class ImageService {
    private final String UPLOAD_DIR = "uploads/";
    private final ImagePathRepository imagePathRepository;

    public ImageService(
            ImagePathRepository imagePathRepository
    ) {
        this.imagePathRepository = imagePathRepository;
    }

    public ResponseEntity<Resource> retrieveImageFromFS(String filename) {
        try {
            // Construct the path to the file
            Path filePath = Paths.get(UPLOAD_DIR).resolve(filename).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            // Check if the file exists and is readable
            if(resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.status(404).body(null);
            }
        } catch (Exception e){
            return ResponseEntity.status(500).body(null);
        }
    }

    public int getImageCount() {
        return this.imagePathRepository.getImageCount();
    }

    public ImagePathListDto getImages(int offset, int size) {
        ImagePathListDto imageList = new ImagePathListDto();

        imageList.setImages(this.imagePathRepository.getImagePaths(offset, size));

        int imageCount = getImageCount();

        imageList.setHasNext(offset + size < imageCount);
        imageList.setHasPrevious(offset > 1);

        return imageList;
    }

    public boolean saveImage(MultipartFile file) {
        if (file.isEmpty()) {
            return false;
        }

        // Try to save the image file to our file system
        try {
            String fileExtension = getFileExtension(Objects.requireNonNull(file.getOriginalFilename()));
            String fileName = UUID.randomUUID() + "." + fileExtension;
            File targetFile = new File(UPLOAD_DIR + fileName);

            // Check for directory
            Files.createDirectories(Paths.get(UPLOAD_DIR));

            // Save file
            Files.copy(
                    file.getInputStream(),
                    targetFile.toPath(),
                    StandardCopyOption.REPLACE_EXISTING
            );

            // Save file path to database
            this.imagePathRepository.saveImagePath(targetFile.getName());
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deleteImage(long id) {
        try {
            // Retrieve file path name
            String path = imagePathRepository.getImagePath(id).getPath();
            Path filePath = Paths.get("uploads", path);

            // Remove image path from database
            imagePathRepository.deleteImagePath(id);

            // Remove saved image file
            Files.delete(filePath.toAbsolutePath());

            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // Get the file extension ie: '.png' '.jpeg' etc.
    private String getFileExtension(String fileName) {
        return fileName.substring(fileName.lastIndexOf('.') + 1);
    }
}
