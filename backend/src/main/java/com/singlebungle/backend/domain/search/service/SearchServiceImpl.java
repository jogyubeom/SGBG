package com.singlebungle.backend.domain.search.service;

import com.singlebungle.backend.domain.keyword.entity.Keyword;
import com.singlebungle.backend.domain.keyword.repository.KeywordRepository;
import com.singlebungle.backend.domain.search.dto.response.SearchResponseDTO;
import com.singlebungle.backend.domain.search.entity.Search;
import com.singlebungle.backend.domain.search.repository.SearchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService {

    private final SearchRepository searchRepository;
    private final KeywordRepository keywordRepository;

    @Override
    public void saveTags(List<String> tags, String imageUrl) {

        for (String tag : tags) {

            if (searchRepository.existsByTagInfo_Tag(tag))  // 존재 여부 체크
                continue;

            Search document = new Search();
            document.setId(UUID.randomUUID().toString());  // 고유 ID 생성

            // TagInfo 설정
            Search.TagInfo tagInfo = new Search.TagInfo();
            tagInfo.setTag(tag);
            tagInfo.setImageUrl(imageUrl);
            document.setTagInfo(tagInfo);

            searchRepository.save(document);    // Elasticsearch에 저장
        }
    }

    @Override
    @Transactional
    public List<SearchResponseDTO> getImageUrlsByTag(String tag) {
        List<Search> searches = searchRepository.findByTagInfo_TagContaining(tag);

        // 키워드 조회수 + 1
        Keyword keyword = keywordRepository.findByKeywordName(tag);
        if (keyword != null) {
            keyword.setUseCount(keyword.getUseCount() + 1);
        }

        return searches.stream()
                .map(search -> new SearchResponseDTO(
                        search.getTagInfo().getTag(),
                        search.getTagInfo().getImageUrl()
                ))
                .collect(Collectors.toList());

    }


}