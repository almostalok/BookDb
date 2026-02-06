# Database Schema

## Users
- id (UUID)
- name
- email
- password
- bio
- created_at

## Books
- id
- title
- author
- description
- cover_url
- category
- isbn

## Reviews
- id
- user_id
- book_id
- rating
- content
- created_at

## Reading_Status
- user_id
- book_id
- status (want_to_read | reading | completed | dropped)
- started_at
- completed_at

## Followers
- follower_id
- following_id
