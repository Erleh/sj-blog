package com.spicejack.sj.services;

import com.spicejack.sj.repositories.ImagePathRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class ImageService {
    private final String uploadDir = "uploads/";
    private final ImagePathRepository imagePathRepository;

    public ImageService(
            ImagePathRepository imagePathRepository
    ) {
        this.imagePathRepository = imagePathRepository;
    }

    public boolean saveImage(MultipartFile file) {
        if (file.isEmpty()) {
            return false;
        }

        // Try to save the image file to our file system
        try {
            String fileExtension = getFileExtension(file.getOriginalFilename());
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
            String filePath = "/uploads/" + fileName;
            this.imagePathRepository.saveImagePath(filePath);

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
