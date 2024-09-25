package com.spicejack.sj.repositories;

import com.spicejack.sj.general.dto.ImagePathDto;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ImagePathRepository extends CrudRepository<ImagePathDto, Long> {
    @Query("SELECT path FROM images WHERE id = :id")
    ImagePathDto getImagePath(long id);

    @Query("SELECT * FROM images ORDER BY id DESC LIMIT :limit OFFSET :offset")
    List<ImagePathDto> getImagePaths(int offset, int limit);

    @Query("SELECT COUNT(*) FROM images")
    int getImageCount();

    @Modifying
    @Query("INSERT INTO images (id, path) VALUES (DEFAULT, :path)")
    void saveImagePath(String path);

    @Modifying
    @Query("DELETE FROM images WHERE id = :id")
    void deleteImagePath(long id);
}
