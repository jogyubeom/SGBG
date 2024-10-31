package com.singlebungle.backend.domain.search.repository;

import com.singlebungle.backend.domain.search.entity.Search;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

import java.util.List;

@EnableElasticsearchRepositories
public interface SearchRepository extends ElasticsearchRepository <Search, String>{
    boolean existsByTagInfo_Tag(String tag);

    List<Search> findByTagInfo_TagContaining(String tag);
}
