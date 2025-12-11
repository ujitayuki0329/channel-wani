export default defineEventHandler(async (event) => {
  const channelHandle = 'WANIVSPBAO' // @WANIVSPBAO
  const apiKey = process.env.YOUTUBE_API_KEY || ''
  
  // APIキーがない場合は、フォールバックとしてnullを返す
  if (!apiKey) {
    return {
      videoId: null,
      error: 'YouTube API key is not configured'
    }
  }

  try {
    // まずチャンネルIDを取得
    let channelId = ''
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&forHandle=${channelHandle}&part=id`
    )

    if (channelResponse.ok) {
      const channelData = await channelResponse.json()
      if (channelData.items && channelData.items.length > 0) {
        channelId = channelData.items[0].id
      }
    }

    // チャンネルIDが取得できない場合は、チャンネル名で検索
    if (!channelId) {
      const searchChannelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(channelHandle)}&type=channel&part=snippet&maxResults=1`
      )
      if (searchChannelResponse.ok) {
        const searchChannelData = await searchChannelResponse.json()
        if (searchChannelData.items && searchChannelData.items.length > 0) {
          channelId = searchChannelData.items[0].id.channelId
        }
      }
    }

    if (!channelId) {
      return {
        videoId: null,
        error: 'Channel not found'
      }
    }

    // YouTube Data API v3を使用して最新動画を取得
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&type=video&maxResults=1`
    )

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`)
    }

    const data = await response.json()

    if (data.items && data.items.length > 0) {
      const videoId = data.items[0].id.videoId
      return {
        videoId,
        title: data.items[0].snippet.title,
        thumbnail: data.items[0].snippet.thumbnails.high.url
      }
    }

    return {
      videoId: null,
      error: 'No videos found'
    }
  } catch (error) {
    console.error('Error fetching YouTube video:', error)
    return {
      videoId: null,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
})

