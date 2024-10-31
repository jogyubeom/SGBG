package com.singlebungle.backend.domain.search.entity;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.elasticsearch.annotations.Document;

import java.lang.annotation.Documented;

@Getter @Setter
@Document(indexName = "search-index-v2")
public class Search {

    @Id
    private String id;

    private TagInfo tagInfo;

    @Getter @Setter
    public static class TagInfo {
        private String tag;
        private String imageUrl;
    }

}