# 深谷爬虫類館 - Nuxt.js ウェブサイト

深谷爬虫類館の公式ウェブサイトです。Nuxt.js 3で構築されています。

## 技術スタック

- **Nuxt.js 3** - Vue.jsベースのフレームワーク
- **@nuxt/image** - 画像最適化
- **TypeScript** - 型安全性

## セットアップ

```bash
# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env
# .envファイルを編集してYOUTUBE_API_KEYを設定

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build

# 静的サイト生成（Cloudflare Pages用）
npm run generate
```

## YouTube API キーの取得

最新動画を自動取得するには、YouTube Data API v3のキーが必要です。

1. [Google Cloud Console](https://console.cloud.google.com/)にアクセス
2. 新しいプロジェクトを作成（または既存のプロジェクトを選択）
3. YouTube Data API v3を有効化
4. 認証情報 > APIキーを作成
5. `.env`ファイルに`YOUTUBE_API_KEY=your_api_key_here`を追加

**注意**: APIキーがない場合でも、サイトは動作しますが、最新動画は表示されず、プレースホルダーが表示されます。

## プロジェクト構造

```
channel-wani/
├── assets/          # CSS、画像などのアセット
│   └── css/
│       └── main.css
├── components/     # Vueコンポーネント
│   ├── AppNavbar.vue
│   ├── AppFooter.vue
│   ├── AppHero.vue
│   └── AppLogo.vue
├── layouts/        # レイアウト
│   └── default.vue
├── pages/          # ページ
│   ├── index.vue
│   └── gallery.vue
├── server/         # サーバーAPI
│   └── api/
│       └── youtube-latest.ts
├── public/         # 静的ファイル
│   └── images/    # 画像ファイル
├── app.vue        # アプリケーションエントリーポイント
├── nuxt.config.ts # Nuxt設定
└── package.json    # 依存関係
```

## 画像の配置

既存サイト（https://gustavewani.wixsite.com/fukayahachu）の画像を使用する場合：

1. `public/images/` ディレクトリに画像を配置
2. ロゴ: `public/images/logo.png` として配置
3. 建物外観: `public/images/building-exterior.jpg` として配置
4. ギャラリー画像: 既存サイトから以下の画像をダウンロードして配置
   - IMG_6881.JPG
   - 2L3A6606.JPG
   - IMG_6619.JPG
   - 2L3A6532.JPG
   - Fs8kkA3akAEXGp5.jpg
   - FtpbrO7aMAEGloc.jpg

## Cloudflare Pages へのデプロイ

1. GitHubにリポジトリをプッシュ
2. Cloudflare Dashboard > Pages > Create a project
3. GitHubリポジトリを接続
4. ビルド設定:
   - Build command: `npm run generate`
   - Build output directory: `.output/public`
   - Root directory: `/` (ルートディレクトリ)
5. 環境変数の設定:
   - `YOUTUBE_API_KEY`: YouTube Data API v3のキー

## 既存サイトの情報

- **名称**: 深谷爬虫類館
- **所在地**: 〒369-1245 埼玉県深谷市荒川１３－１
- **営業時間**: 10:00 - 17:00
- **料金**: 大人 2,000円/時間、小人 1,000円/時間
- **展示生体数**: 100種類以上
- **YouTubeチャンネル**: https://www.youtube.com/@WANIVSPBAO

## 要件

- **Node.js**: 20.0.0以上（推奨: 20.19.0以上）
- **npm**: 9.0.0以上

## トラブルシューティング

### Node.jsバージョンエラーが発生する場合

Node.js 20.0.0以上が必要です。以下のコマンドで確認してください：

```bash
node --version
```

Node.jsのバージョンが古い場合は、[nvm](https://github.com/nvm-sh/nvm)を使用してアップグレードしてください：

```bash
nvm install 20
nvm use 20
```

### YouTube動画が表示されない場合

1. `.env`ファイルに`YOUTUBE_API_KEY`が正しく設定されているか確認
2. YouTube Data API v3が有効になっているか確認
3. ブラウザのコンソールでエラーを確認

### 依存関係のエラーが発生する場合

以下のコマンドでクリーンインストールを実行してください：

```bash
rm -rf node_modules package-lock.json
npm install --ignore-scripts
```

インストール後、手動でNuxtを準備する場合：

```bash
npm run dev
```

これにより自動的にNuxtが準備されます。

## ライセンス

このプロジェクトは深谷爬虫類館の所有物です。

