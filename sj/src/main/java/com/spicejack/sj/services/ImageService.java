package com.spicejack.sj.services;

import com.spicejack.sj.general.dto.ImagePathListDto;
import com.spicejack.sj.repositories.ImagePathRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Objects;
import java.util.UUID;
import java.util.logging.Logger;

@Service
public class ImageService {
    private final String uploadDir = "uploads/";
    private final ImagePathRepository imagePathRepository;

    private final Logger logger = Logger.getLogger(ImageService.class.toString());

    public ImageService(
            ImagePathRepository imagePathRepository
    ) {
        this.imagePathRepository = imagePathRepository;
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
            File targetFile = new File(uploadDir + fileName);

            // Check for directory
            Files.createDirectories(Paths.get(uploadDir));

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
            Path filePath = Paths.get(path);

            // Remove image path from database
            imagePathRepository.deleteImagePath(id);

            // Remove saved image file
            Files.delete(filePath);

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
