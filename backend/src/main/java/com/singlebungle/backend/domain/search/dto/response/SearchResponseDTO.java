package com.singlebungle.backend.domain.search.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class SearchResponseDTO {

    private String tag;
    private String imageUrl;

}
