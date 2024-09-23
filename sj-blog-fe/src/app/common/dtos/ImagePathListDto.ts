import { ImagePathDto } from "./ImagePathDto";

export interface ImagePathListDto {
    images: ImagePathDto[],
    hasNext: boolean,
    hasPrevious: boolean
}