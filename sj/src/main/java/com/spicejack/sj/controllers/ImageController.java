package com.spicejack.sj.controllers;

import com.spicejack.sj.general.dto.ImagePathListDto;
import com.spicejack.sj.services.ImageService;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ImageController {
    private final ImageService imageService;

    public ImageController(
            ImageService imageService
    ) {
        this.imageService = imageService;
    }

    @GetMapping("/api/get_image_list")
    public ImagePathListDto getImageList(
            @RequestParam int page,
            @RequestParam int size
    ) {
        int offset = size * (page - 1);

        return this.imageService.getImages(offset, size);
    }

    @PostMapping("/api/upload_image")
    public boolean saveImage(
            @RequestParam("image") MultipartFile file
    ) {
        return this.imageService.saveImage(file);
    }

    @PostMapping("/api/delete_image")
    public boolean deleteImage(
            @RequestParam("id") long id
    ) {
        return this.imageService.deleteImage(id);
    }

    @GetMapping("/public/uploads/{filename:.+}")
    public ResponseEntity<Resource> serveFile(
            @PathVariable String filename
    ) {
        return this.imageService.retrieveImageFromFS(filename);
    }
}
