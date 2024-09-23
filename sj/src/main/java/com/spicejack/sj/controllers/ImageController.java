package com.spicejack.sj.controllers;

import com.spicejack.sj.general.dto.ImagePathListDto;
import com.spicejack.sj.services.ImageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
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
}
