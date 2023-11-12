import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  // projectId: import.meta.env.VITE_SANITY_ID,
  projectId: 'jjzx9vlb',
  dataset: 'production',
  apiVersion: '2022-02-02', // Replace with the latest API version
  useCdn: true, // Enable this for faster response times, but beware of potential caching issues during development
  // token: import.meta.env.VITE_SANITY_TOKEN,
  token:
    'skNqc2ENj7P3wpdqM205ZQ4VHlZB34kxZDI3K5onBGgmWq0tvFX9dDF7N57X8Qt5AF9o8QYJm6rUFZFOblvgV3mbxQJz75rmUdJ50Mpv7T7smyOxcj9wu6s4TQxEAH7q6LYT3n4wl7DkCwbJwmsADG9geamN2JcVPKkGIjkVUeIeZl0T1Dvt',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
