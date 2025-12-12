<template>
  <div class="page-index">
    <AppHero />
    
    <!-- Modal Components -->
    <AppModal :is-open="isCalendarModalOpen" @close="closeCalendarModal">
      <NuxtImg src="/images/calender.jpg" alt="カレンダー" class="modal-image" />
    </AppModal>
    
    <AppModal :is-open="isFloorMapModalOpen" @close="closeFloorMapModal">
      <NuxtImg src="/images/floar-map.jpg" alt="フロアマップ" class="modal-image" />
    </AppModal>
    
    <!-- About Section -->
    <section id="about" class="section about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">深谷爬虫類館とは</h2>
          <p class="section-subtitle">爬虫類の魅力を伝える専門施設</p>
        </div>
        <div class="about-content">
          <div class="about-text">
            <h3>深谷爬虫類館へようこそ</h3>
            <p>
              深谷爬虫類館は、トカゲやヘビ、カメやワニまで様々な爬虫類や両生類などの生き物達を間近で見て、
              触れて、餌やりなどの体験が出来る展示施設です。
            </p>
            <p>
              展示生体数は100種類以上。普段なかなか見ることの出来ないユニークな生き物達をじっくり観察してみませんか？
            </p>
            <div class="features">
              <div class="feature-card">
                <div class="feature-icon">🐍</div>
                <h4>100種類以上の展示</h4>
                <p>様々な種類の爬虫類を展示</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🤝</div>
                <h4>触れ合い体験</h4>
                <p>実際に触れ合える体験</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🍖</div>
                <h4>餌やり体験</h4>
                <p>餌やり体験が可能</p>
              </div>
            </div>
          </div>
          <div class="about-image">
            <NuxtImg 
              src="/images/building-exterior.jpg" 
              alt="深谷爬虫類館（チャンネル鰐）外観 - 埼玉県深谷市の爬虫類専門施設"
              class="about-image-img"
              placeholder
            />
          </div>
        </div>
      </div>
    </section>

    <!-- YouTube Section -->
    <section id="youtube" class="section youtube-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">YouTubeチャンネル</h2>
          <p class="section-subtitle">100万人登録者を誇るチャンネル</p>
        </div>
        <div class="youtube-content">
          <div class="youtube-stats">
            <div class="stat-card">
              <div class="stat-number">1,010,000+</div>
              <div class="stat-label">登録者数</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">3820+</div>
              <div class="stat-label">動画数</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">963M+</div>
              <div class="stat-label">総再生回数</div>
            </div>
          </div>
          <div class="youtube-embed">
            <div v-if="isVideoPlaying && latestVideoId" class="youtube-iframe-container">
              <iframe
                :src="`https://www.youtube.com/embed/${latestVideoId}?autoplay=1`"
                title="最新動画"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="youtube-iframe"
              ></iframe>
            </div>
            <div v-else-if="latestVideoId" class="youtube-thumbnail-container" @click="playVideo">
              <img
                :src="`https://img.youtube.com/vi/${latestVideoId}/maxresdefault.jpg`"
                :alt="videoTitle || '最新動画'"
                class="youtube-thumbnail"
                @error="handleThumbnailError"
              />
              <div class="youtube-play-overlay">
                <div class="youtube-play-button">
                  <svg viewBox="0 0 68 48" class="youtube-play-icon">
                    <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.63-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                    <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div v-else class="embed-placeholder">
              <div class="youtube-icon">▶</div>
              <p>{{ loadingVideo ? '最新動画を読み込み中...' : '最新動画を取得できませんでした' }}</p>
              <a href="https://www.youtube.com/@WANIVSPBAO" target="_blank" rel="noopener noreferrer" class="btn btn-youtube">チャンネルを見る</a>
            </div>
          </div>
          <div class="youtube-description">
            <h3>爬虫類の魅力を動画で発信</h3>
            <p>
              当館のYouTubeチャンネルでは、爬虫類の生態、飼育方法、
              希少種の紹介など、様々なコンテンツを配信しています。
              100万人を超える登録者の皆様と共に、爬虫類の世界を
              より深く知っていただけるよう、日々コンテンツを制作しています。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Preview Section -->
    <section id="gallery-preview" class="section gallery-preview">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">展示生体</h2>
          <p class="section-subtitle">100種類以上の爬虫類を展示</p>
        </div>
        <div class="gallery-preview-grid">
          <div 
            v-for="(item, index) in featuredAnimals" 
            :key="index" 
            class="gallery-preview-item"
          >
            <div class="gallery-preview-image">
              <NuxtImg 
                v-if="item.image" 
                :src="item.image" 
                :alt="`${item.name} - 深谷爬虫類館（チャンネル鰐）の展示生体`"
                placeholder
                class="gallery-preview-img"
              />
              <div v-else class="image-placeholder">{{ item.name }}</div>
            </div>
            <div class="gallery-preview-info">
              <h4>{{ item.name }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="gallery-preview-action">
          <NuxtLink to="/gallery" class="btn btn-primary">もっと見る</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Access Section -->
    <section id="access" class="section access">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">アクセス・営業案内</h2>
          <p class="section-subtitle">施設へのアクセス情報</p>
        </div>
        <div class="access-content">
          <div class="access-info">
            <div class="info-item">
              <h4>所在地</h4>
              <p>〒369-1245<br>埼玉県深谷市荒川１３－１<br>花園橋の下<br>ホテルスパムの横</p>
            </div>
            <div class="info-item">
              <h4>お車でお越しの場合</h4>
              <p>花園ICから５分</p>
            </div>
            <div class="info-item">
              <h4>電車でお越しの場合</h4>
              <p>ふかや花園駅から 徒歩２５分<br>タクシー１０分</p>
            </div>
            <div class="info-item">
              <h4>営業時間</h4>
              <p>10:00 - 17:00</p>
              <div class="info-links">
                <a href="#" @click.prevent="openCalendarModal" class="info-link">カレンダーはこちら</a>
                <a href="#" @click.prevent="openFloorMapModal" class="info-link">フロアマップはこちら</a>
              </div>
            </div>
            <div class="info-item">
              <h4>料金</h4>
              <p>
                大人 １時間 2,000円<br>
                小人 １時間 1,000円<br>
                （１ドリンク、リクガメのご飯付き）<br>
                ※幼稚園以下入場料無料<br>
                延長 １時間 1,000円（１ドリンク付き）<br>
                ・触れ合い（２分）500円<br>
                ・追加ドリンク 100円<br>
                ・餌やり体験 300～500円（種類による）
              </p>
            </div>
            <div class="info-item">
              <h4>注意事項</h4>
              <p>
                ・当館は爬虫類の適正温度に合わせ、室温が約30度となっております。<br>
                ・お子様をお連れのお客様は、お子様から目を離さないようお願い致します。<br>
                ・生き物へのストレスを配慮し、ケージ壁面を叩いたり、指を這わせて追わせるような行為はご遠慮頂くようお願い致します。<br>
                ・写真、動画の撮影は自由ですが、フラッシュ撮影はお控えください。
              </p>
            </div>
          </div>
          <div class="access-map">
            <div class="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.935862622581!2d139.24044987600905!3d36.11942027244902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ed06271ed00cd%3A0x3969755bf4a20acb!2z44CSMzY5LTEyNDUg5Z-8546J55yM5rex6LC35biC6I2S5bed77yR77yT4oiS77yR!5e0!3m2!1sja!2sjp!4v1765460783435!5m2!1sja!2sjp" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="map-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">お問い合わせ</h2>
          <p class="section-subtitle">ご質問やお問い合わせはこちらから</p>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">お名前 <span class="required">*</span></label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              :class="{ 'error': errors.name }"
              @blur="validateName"
            >
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>
          <div class="form-group">
            <label for="email">メールアドレス <span class="required">*</span></label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              :class="{ 'error': errors.email }"
              @blur="validateEmail"
            >
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
          <div class="form-group">
            <label for="subject">件名</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject"
            >
          </div>
          <div class="form-group">
            <label for="message">お問い合わせ内容 <span class="required">*</span></label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              :class="{ 'error': errors.message }"
              @blur="validateMessage"
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>
          <div v-if="submitMessage" class="submit-message" :class="{ 'success': submitSuccess, 'error': !submitSuccess }">
            {{ submitMessage }}
          </div>
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? '送信中...' : '送信' }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface FeaturedAnimal {
  name: string
  description: string
  image?: string
  category: string
}

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

// バリデーション関数
const validateName = () => {
  if (!form.value.name.trim()) {
    errors.value.name = 'お名前を入力してください'
    return false
  }
  if (form.value.name.trim().length < 2) {
    errors.value.name = 'お名前は2文字以上で入力してください'
    return false
  }
  errors.value.name = ''
  return true
}

const validateEmail = () => {
  if (!form.value.email.trim()) {
    errors.value.email = 'メールアドレスを入力してください'
    return false
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    errors.value.email = '正しいメールアドレスを入力してください'
    return false
  }
  errors.value.email = ''
  return true
}

const validateMessage = () => {
  if (!form.value.message.trim()) {
    errors.value.message = 'お問い合わせ内容を入力してください'
    return false
  }
  if (form.value.message.trim().length < 10) {
    errors.value.message = 'お問い合わせ内容は10文字以上で入力してください'
    return false
  }
  errors.value.message = ''
  return true
}

const validateForm = () => {
  const nameValid = validateName()
  const emailValid = validateEmail()
  const messageValid = validateMessage()
  return nameValid && emailValid && messageValid
}

// 展示生体のプレビュー（3種類）
const featuredAnimals: FeaturedAnimal[] = [
  {
    name: 'ヘビの種類',
    description: '様々な種類のヘビを展示しています。実際に触れ合うこともできます。',
    image: '/images/sample-hebi.jpg',
    category: 'ヘビ'
  },
  {
    name: 'トカゲの種類',
    description: 'カラフルで魅力的なトカゲたちを間近で観察できます。',
    image: '/images/sample-tokage.jpg',
    category: 'トカゲ'
  },
  {
    name: 'カメの種類',
    description: 'リクガメなど、様々なカメを展示しています。餌やり体験も可能です。',
    image: '/images/sample-kame.jpg',
    category: 'カメ'
  }
]

// モーダルの状態管理
const isCalendarModalOpen = ref(false)
const isFloorMapModalOpen = ref(false)

const openCalendarModal = () => {
  isCalendarModalOpen.value = true
}

const closeCalendarModal = () => {
  isCalendarModalOpen.value = false
}

const openFloorMapModal = () => {
  isFloorMapModalOpen.value = true
}

const closeFloorMapModal = () => {
  isFloorMapModalOpen.value = false
}

// 最新動画IDを直接指定（APIキー取得後は、fetchLatestVideo()を使用）
const latestVideoId = ref<string | null>('qeTuT0blMjQ')
const videoTitle = ref<string | null>(null)
const loadingVideo = ref(false)
const isVideoPlaying = ref(false)

// 動画を再生
const playVideo = () => {
  isVideoPlaying.value = true
}

// サムネイル画像のエラーハンドリング
const handleThumbnailError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // フォールバック: 標準解像度のサムネイルを使用
  if (latestVideoId.value) {
    img.src = `https://img.youtube.com/vi/${latestVideoId.value}/hqdefault.jpg`
  }
}

// 最新動画を取得（APIキー取得後に有効化）
// const fetchLatestVideo = async () => {
//   try {
//     loadingVideo.value = true
//     const { data } = await useFetch<{ videoId: string | null; title?: string; thumbnail?: string; error?: string }>('/api/youtube-latest')
//     if (data.value && 'videoId' in data.value && data.value.videoId) {
//       latestVideoId.value = data.value.videoId
//       videoTitle.value = data.value.title || null
//     }
//   } catch (error) {
//     console.error('Failed to fetch latest video:', error)
//   } finally {
//     loadingVideo.value = false
//   }
// }

// onMounted(() => {
//   fetchLatestVideo()
// })

const handleSubmit = async () => {
  // バリデーション
  if (!validateForm()) {
    submitMessage.value = '入力内容に誤りがあります。確認してください。'
    submitSuccess.value = false
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const { data, error } = await useFetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name.trim(),
        email: form.value.email.trim(),
        subject: form.value.subject.trim() || '（件名なし）',
        message: form.value.message.trim()
      }
    })

    if (error.value) {
      throw error.value
    }

    submitMessage.value = 'お問い合わせありがとうございます！\n後日、担当者よりご連絡いたします。'
    submitSuccess.value = true

    // フォームをリセット
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    errors.value = {
      name: '',
      email: '',
      message: ''
    }

    // 3秒後にメッセージを非表示
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  } catch (err) {
    console.error('送信エラー:', err)
    submitMessage.value = '送信に失敗しました。しばらく時間をおいて再度お試しください。'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: '深谷爬虫類館 | チャンネル鰐 | 100種類以上の爬虫類を展示する専門施設',
  meta: [
    { name: 'description', content: '深谷爬虫類館（チャンネル鰐）は、埼玉県深谷市にある100種類以上の爬虫類を展示する専門施設です。トカゲ、ヘビ、カメ、ワニなど様々な爬虫類を間近で観察でき、触れ合い体験や餌やり体験も可能です。YouTubeチャンネル登録者100万人を誇る爬虫類専門施設です。' },
    { name: 'keywords', content: '深谷爬虫類館,チャンネル鰐,爬虫類館,爬虫類,ヘビ,トカゲ,カメ,ワニ,埼玉県,深谷市,爬虫類展示,触れ合い体験,餌やり体験,YouTube,チャンネル鰐YouTube,深谷市爬虫類館' },
    { property: 'og:title', content: '深谷爬虫類館 | チャンネル鰐 | 100種類以上の爬虫類を展示する専門施設' },
    { property: 'og:description', content: '深谷爬虫類館（チャンネル鰐）は、埼玉県深谷市にある100種類以上の爬虫類を展示する専門施設です。トカゲ、ヘビ、カメ、ワニなど様々な爬虫類を間近で観察でき、触れ合い体験や餌やり体験も可能です。' },
    { property: 'og:url', content: 'https://fukayahachu.com' },
    { property: 'og:image', content: 'https://fukayahachu.com/images/building-exterior.jpg' },
    { name: 'twitter:title', content: '深谷爬虫類館 | チャンネル鰐' },
    { name: 'twitter:description', content: '100種類以上の爬虫類を展示する専門施設。触れ合い体験や餌やり体験も可能です。' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Zoo',
        name: '深谷爬虫類館',
        alternateName: 'チャンネル鰐',
        description: '深谷爬虫類館は、埼玉県深谷市にある100種類以上の爬虫類を展示する専門施設です。',
        url: 'https://fukayahachu.com',
        logo: 'https://fukayahachu.com/images/logo.png',
        image: 'https://fukayahachu.com/images/building-exterior.jpg',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'JP',
          addressRegion: '埼玉県',
          addressLocality: '深谷市',
          streetAddress: '荒川１３－１',
          postalCode: '369-1245'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '36.11942027244902',
          longitude: '139.24044987600905'
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          opens: '10:00',
          closes: '17:00'
        },
        priceRange: '¥1,000-¥2,000',
        sameAs: [
          'https://www.youtube.com/@WANIVSPBAO',
          'https://twitter.com/wanivspbao',
          'https://channelwani.base.shop/'
        ]
      })
    }
  ]
})
</script>

<style scoped>
.page-index {
  padding-top: 0;
}

.about {
  background: var(--light-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: var(--light-bg);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(45, 134, 89, 0.2);
  box-shadow: var(--shadow-card);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow);
  border-color: var(--primary-color);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--dark-text);
}

.feature-card p {
  color: var(--text-light);
  font-size: 0.9rem;
}

.about-image-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: var(--shadow-card);
}

.gallery-preview {
  background: var(--light-bg);
}

.gallery-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.gallery-preview-item {
  background: var(--light-secondary);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(45, 134, 89, 0.2);
  box-shadow: var(--shadow-card);
}

.gallery-preview-item:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow);
  border-color: var(--primary-color);
}

.gallery-preview-image {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.gallery-preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-preview-item:hover .gallery-preview-img {
  transform: scale(1.1);
}

.gallery-preview-image .image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-bg);
  font-size: 1.2rem;
  font-weight: 600;
}

.gallery-preview-info {
  padding: 1.5rem;
}

.gallery-preview-info h4 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--dark-text);
}

.gallery-preview-info p {
  color: var(--text-light);
  line-height: 1.6;
}

.gallery-preview-action {
  text-align: center;
  margin-top: 2rem;
}

.youtube-section {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF5F5 50%, #FFFFFF 100%);
  position: relative;
}

.youtube-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FF0000 0%, #CC0000 100%);
}

.youtube-section .section-title {
  background: linear-gradient(135deg, #FF0000 0%, #CC0000 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.youtube-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.youtube-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat-card {
  background: linear-gradient(135deg, #FF0000 0%, #CC0000 100%);
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 0, 0, 0.4);
  background: linear-gradient(135deg, #FF1A1A 0%, #E60000 100%);
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  color: #FFFFFF;
}

.stat-label {
  font-size: 1.1rem;
  color: #FFFFFF;
  opacity: 0.95;
}

.youtube-embed {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.youtube-iframe-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.youtube-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
}

.youtube-thumbnail-container {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 20px;
}

.youtube-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.youtube-thumbnail-container:hover .youtube-thumbnail {
  transform: scale(1.05);
}

.youtube-play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;
}

.youtube-thumbnail-container:hover .youtube-play-overlay {
  background: rgba(0, 0, 0, 0.5);
}

.youtube-play-button {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 0, 0, 0.9);
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.4);
}

.youtube-thumbnail-container:hover .youtube-play-button {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(255, 0, 0, 0.6);
}

.youtube-play-icon {
  width: 68px;
  height: 48px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.embed-placeholder {
  width: 100%;
  height: 100%;
  background: #FFF5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 2px dashed #FF0000;
}

.youtube-icon {
  font-size: 4rem;
  color: #FF0000;
}

.youtube-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.youtube-description h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #FF0000;
}

.youtube-description p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.access {
  background: var(--light-bg);
}

.access-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.access-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  background: var(--light-secondary);
  padding: 2rem;
  border-radius: 15px;
  border-left: 4px solid var(--primary-color);
  box-shadow: var(--shadow-card);
}

.info-item h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.info-item p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.info-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.info-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}

.info-link:hover {
  color: var(--secondary-color);
  border-bottom-color: var(--secondary-color);
  transform: translateX(5px);
}

.modal-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
}

.access-map {
  position: sticky;
  top: 100px;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
}

.contact {
  background: var(--light-secondary);
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--dark-text);
}

.form-group input,
.form-group textarea {
  padding: 1rem;
  background: var(--light-bg);
  border: 2px solid rgba(45, 134, 89, 0.3);
  border-radius: 10px;
  color: var(--dark-text);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(45, 134, 89, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.form-group .required {
  color: #e74c3c;
  margin-left: 0.25rem;
}

.form-group input.error,
.form-group textarea.error {
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.error-message {
  display: block;
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

.submit-message {
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  font-weight: 600;
  white-space: pre-line;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.btn-youtube {
  background: #FF0000;
  color: #FFFFFF;
  border: 2px solid #FF0000;
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
}

.btn-youtube:hover {
  background: #CC0000;
  border-color: #CC0000;
  color: #FFFFFF;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 0, 0, 0.4);
}

@media (max-width: 968px) {
  .about-content,
  .access-content {
    grid-template-columns: 1fr;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
  
  .youtube-stats {
    grid-template-columns: 1fr;
  }
  
  .gallery-preview-grid {
    grid-template-columns: 1fr;
  }
}
</style>

