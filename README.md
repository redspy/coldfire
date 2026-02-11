# 🕶️ XIZE EYEWEAR DESIGN
> 미래지향적이고 미니멀한 프리미엄 아이웨어 브랜드 **XIZE**의 2026 컬렉션 웹사이트입니다.

### 🔥 **Live Demo**: [https://redspy.github.io/coldfire](https://redspy.github.io/coldfire)

---

## 📸 프로젝트 소개

XIZE EYEWEAR DESIGN은 "Construct Your Reality"라는 슬로건 아래, 구조적 미학과 감각적인 디자인을 제안합니다. 본 프로젝트는 이 브랜드 아이덴티티를 웹 경험으로 구현한 결과물입니다.

### ✨ 주요 변경 사항 (Latest Updates)
- **리브랜딩**: 브랜드명을 'Cold Fire'에서 **'XIZE EYEWEAR DESIGN'**으로 변경.
- **비주얼 업그레이드**:
    - **로고 표준화**: 모든 페이지(`header`, `footer`, `hero`)에 SVG 벡터 로고(`logo_hero.svg`)를 적용하여 선명하고 일관된 브랜딩 구축.
    - **이미지 교체**: About 페이지에 'Trendy & Chic' 컨셉의 모델 이미지를 적용하여 세련된 브랜드 무드 강조.
    - **섹션 비주얼 강화**:
        - **Process**: 기획/브랜딩/디자인/생산 단계에 직관적인 배경 이미지 및 오버레이 적용.
        - **Mission**: 브랜드 철학 섹션에 회사 전경(`companyPic`) 배경 적용.
        - **Careers**: 연혁 섹션을 2단 레이아웃(텍스트+`history` 이미지)으로 개편하고, 리더 프로필(`ceoPic`)을 강조하는 헤더 디자인 적용.
- **페이지 구조 개편**:
    - **메인 페이지 (`index.html`)**: 임팩트 있는 Hero 섹션 중심의 랜딩 페이지로 단순화.
    - **안경 컬렉션 (`glasses.html`)**: 제품 리스트를 별도 페이지로 분리하여 쇼핑 경험 최적화.
    - **더 알아보기 (`about.html`)**: 브랜드 주소 및 철학을 담은 소개 페이지 업데이트 (주소 레이아웃 최적화).
- **디자인 시스템**: 다크 테마(Dark Theme)를 기반으로 한 일관된 UI/UX 적용.

---

## 📂 페이지 구성

| 페이지 | 파일명 | 설명 |
|---|---|---|
| **Home** | `index.html` | 브랜드 이미지를 전달하는 메인 랜딩 페이지 |
| **Glasses** | `glasses.html` | 전체 안경 컬렉션을 볼 수 있는 제품 목록 페이지 |
| **About** | `about.html` | 브랜드 미션, 프로세스, 갤러리 등을 소개하는 페이지 |
| **Product Detail** | `product-cfXX.html` | 각 제품의 상세 정보 및 구매 페이지 (CF-01 ~ CF-06) |
| **Template** | `template.html` | 향후 확장을 위한 표준 레이아웃 템플릿 |

---

## 🛠️ 기술 스택 (Tech Stack)
- **HTML5**: 시맨틱 마크업을 준수한 구조 설계.
- **CSS3**: 외부 라이브러리 없이 Flexbox/Grid를 활용한 순수 CSS 스타일링.
- **JavaScript (Vanilla)**: 팝업 메뉴, 스크롤 인터랙션 등 동적 기능 구현.
- **Python**: 이미지 최적화 및 로고 가공(`crop_logo.py`) 자동화 스크립트 활용.

---

## 🚀 설치 및 실행 방법

### 1. 프로젝트 클론
```bash
git clone https://github.com/redspy/coldfire.git
cd coldfire
```

### 2. 로컬 서버 실행
Python이 설치되어 있다면 간단하게 로컬 서버를 띄울 수 있습니다.
```bash
# Python 3.x
python3 -m http.server 8000
```

### 3. 브라우저 확인
브라우저 주소창에 `http://localhost:8000`을 입력하여 접속합니다.

---

## ➕ 신규 안경/선글라스 추가 가이드

프로젝트의 확장성을 위해 신규 제품을 쉽게 추가할 수 있도록 설계되었습니다.

### 1단계: 이미지 에셋 준비
1. 새로운 제품 이미지(`png` 또는 `jpg`)를 준비합니다. (배경 제거 권장)
2. 이미지를 `assets/images/` 폴더에 저장합니다. (예: `glasses_07.png`)

### 2단계: 상세 페이지 생성
기존 `product-cf01.html`을 복사하여 새 파일을 만듭니다.
```bash
cp product-cf01.html product-cf07.html
```
생성된 파일에서 **이미지 경로**, **제품명**, **가격**, **설명**을 수정합니다.

### 3단계: 컬렉션 페이지(`glasses.html`)에 제품 추가
`glasses.html` 파일을 열고 `.product-grid` 섹션에 아래 코드를 추가합니다.

```html
<a href="product-cf07.html" class="product-card scroll-reveal">
    <div class="product-image-wrapper">
        <img src="assets/images/glasses_07.png" alt="제품 설명">
        <div class="product-overlay">
            <span class="btn-shop">VIEW DETAILS</span>
        </div>
    </div>
    <div class="product-info">
        <h3>CF-07 NEW MODEL</h3>
        <p class="price">$300.00</p>
    </div>
</a>
```

---

© 2026 XIZE EYEWEAR DESIGN. All rights reserved.
