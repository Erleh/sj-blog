package com.spicejack.sj.controllers;

import com.spicejack.sj.services.ImageService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.logging.Logger;

@RestController
public class ImageController {
    private final ImageService imageService;
    private final Logger logger = Logger.getLogger(ImageController.class.toString());

    public ImageController(
            ImageService imageService
    ) {
        this.imageService = imageService;
    }

    @PostMapping("/api/upload_image")
    public boolean saveImage(
            @RequestParam("image") MultipartFile file
    ) {
        logger.info("attempting upload_image");
        return this.imageService.saveImage(file);
    }
}
