
## 싱글벙글

### **1. 프로젝트 개요**

### **1.1 프로젝트 이름**

**싱글벙글**

인터넷 밈과 이미지 공유가 중심이 되는 현대 디지털 문화에서, 유저가 선호하는 콘텐츠를 간편하게 저장, 관리하고 이를 토대로 트렌드를 분석하는 플랫폼

### **1.2 서비스 목표**

사용자들이 웹 사이트에서 흥미로운 이미지를 쉽게 스크랩하고 관리할 수 있는 확장 프로그램과 데스크톱 앱을 제공하며, 수집된 데이터를 분석하여 키워드 기반 랭킹과 검색 기능을 제공하는 것입니다.

### **2. 핵심 기능 개요**

1. **회원가입 / 로그인**
    - Google Social Login 

2. **이미지 저장**
    - 사용자가 우클릭이나 드래그 앤 드롭으로 이미지를 저장하고 서버에 전송
    - 저장 과정에서 저장할 디렉토리 지정/추가 가능 
    - 디렉토리 안에 디렉토리 중복은 불가능
    - 저장 완료 시 모달창으로 안내
    - 이미지 저장과 동시에 데스크탑 앱에서 업데이트 

3. **빠른 저장**
    - 사용자가 백틱(`)키를 누르면서 클릭 시 바로 이미지를 저장하고 서버에 전송
    - default 폴더에 바로 저장
    - 저장할 디렉토리를 결정하는 과정을 생략
    - 저장 완료 시 모달창으로 안내
    - 중복 저장 시에 모달 알림 안내

4. **키워드 검색**
    - 해당 키워드에 해당하는 이미지 리스트 조회
    - 여러 키워드 동시 검색 가능 (태그로 검색, 문자열 검색 X)
    - 정렬 기준을 바꿀 수 있는 토글이 오른쪽 상단에 있음 (디폴트는 최신순이고, 랜덤순으로도 변경 가능)

5. **디렉토리 관리**
    - 디렉토리 이름 변경 가능
    - 디렉토리 생성 (디렉토리 내부에 디렉토리 생성은 불가능)
    - 디렉토리 삭제 (내부에서 삭제된 이미지들은 휴지통으로 이동)
    - 디렉토리 순서를 마우스로 변경
    
### **3. 구현 계획**

### **3.1** 데이터

1. **데이터 저장소 선정**
    - MySQL: 정형 데이터 관리
    - Redis: 캐싱을 위해 사용 
        - 랭킹 및 
    - Elasticsearch: 빠른 검색 결과 조회 

2. 이미지 URL을 통한 이미지 키워드 데이터 추출 
    - Google Vision, ChatGPT를 활용한 이미지와 관련된 키워드, 태그 추출해서 MySQL에 저장 
    - url에서 이미지 파일로 변환을 마친 데이터를 MySQL에 저장 

3. 실시간 랭킹 
    - Redis를 활용해 검색, 상세 페이지 방문을 통해 변동된 조회수 컬럼 값으로 실시간 랭킹 구현 
    - Redis cache를 활용해 Redis 데이터가 갱신되기 전 빠른 렌더링 제공
    
4. 검색 
    - S3에 저장된 이미지 url과 키워드를 맵핑 한 데이터를 Elasticsearch에 저장 
    - wildcard로 첫번째 필터링을 거치고, 접두어로 가중치를 높게 둔 다음, 글자 수가 작은 단어에 따라 가중치를 차선으로 둠
    - 사용자가 한 글자씩 검색할 때마다 해당 글자가 있는 키워드 결과를 반환 


### **3.2** 프론트엔드

- Node JS 20.15.1
- React 18.2.0
- electron 29.1.1
- Axios 1.7.7
- styled-components 6.1.13

### **3.3** 백엔드

**Language**

- **Java**: OpenJDK 17

**Frameworks**

- **Spring Boot**: 3.3.2
    - Web, Validation, WebFlux, Actuator (for health checks)
- **Spring Data JPA**: 3.3.2
- **Spring Security**: 3.3.2
- **Spring Retry**: 1.3.1 (for retry functionality in schedulers)
- **Spring Cloud AWS**: 2.2.6.RELEASE (for AWS S3 integration)
- **Springdoc OpenAPI**: 2.0.4 (for Swagger documentation)
- **Spring Data Elasticsearch**: Latest compatible with Elasticsearch High-Level Client 7.17.10

**Database**

- **MySQL**: Driver version 8.0.33
- **Redis**: Spring Boot Starter Data Redis (includes Redis caching)
- **MongoDB**: Not explicitly included in the dependencies but extendable through Spring Data MongoDB if needed

**APIs**

- **Jakarta Persistence API**: 3.1.0
- **Jakarta Servlet API**: 6.0.0

**Testing**

- **JUnit**: 5.8.2
- **Spring Security Test**: Integrated for security-related testing
- **Thymeleaf Security Extras**: Thymeleaf templates with Spring Security support

**Build Tools**

- **Gradle**: Version 7.6 (as the build automation tool)

**Libraries**

- **Lombok**: 1.18.26 (for boilerplate code reduction)
- **QueryDSL**: 5.1.0 (for type-safe queries with JPA and Jakarta support)
- **Guava**: 29.0-jre (for utility functions)
- **JSON (org.json)**: 20210307
- **Jsoup**: 1.7.2 (for parsing and extracting HTML)
- **Thymeleaf**: For server-side rendering

**Security**

- **OAuth 2.0**: Client and Resource Server
- **JWT**: Java JWT (jjwt-api 0.11.5) with Jackson support for JSON parsing

**Cloud**

- **AWS S3**: Integration via AWS Java SDK (Version 1.11.1000) and software.amazon SDK (Version 2.20.80)

**ElasticSearch**

- **Spring Data Elasticsearch**: Integrated for ease of use with Elasticsearch
- **Elasticsearch High-Level Client**: Version 7.17.10
- **Elastic Java Client**: Version 8.9.0 (for advanced use cases)

**Image Processing**

- **TwelveMonkeys ImageIO**: Core (3.9.4) and WebP support

**Scheduler**

- **Spring Retry**: 1.3.1 (with Spring Aspects)

**Other**

- **Base64 Processing**: JAXB API 2.3.1

### **3.4** 서버

- Ubuntu 20.04 LTS
- Docker-compose 2.6.1
- Nginx 1.18.0
- Docker 27.3.1
- Jenkins 2.452.3

