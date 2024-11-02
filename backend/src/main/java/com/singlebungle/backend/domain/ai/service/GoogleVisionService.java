package com.singlebungle.backend.domain.ai.service;

import java.io.IOException;
import java.util.List;

import com.google.cloud.vision.v1.*;
import com.google.protobuf.ByteString;


public interface GoogleVisionService {
    boolean detectSafeSearchGoogleVision(Image image) throws IOException;

    List<String> detectLabels(Image image) throws IOException;

    List<String> analyzeImage(String imageUrl) throws IOException;

    boolean isBase64Image(String imageUrl);

    Image buildImageFromBase64(String base64Image);

    Image buildImageFromUrl(String imageUrl);




}
