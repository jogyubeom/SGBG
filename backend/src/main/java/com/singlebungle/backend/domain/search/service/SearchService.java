package com.singlebungle.backend.domain.search.service;

import com.singlebungle.backend.domain.search.dto.response.SearchResponseDTO;

import java.util.List;

public interface SearchService {
    void saveTags(List<String> tags, String imageUrl);
    List<SearchResponseDTO> getImageUrlsByTag(String tag);

}
