# Image Gallery

A responsive image gallery created as **Task 9** of my
**Web Development Internship at Veda Technology**.

## 📌 Project Overview

This project is a responsive image gallery that displays multiple
images in a CSS Grid layout.

When the user clicks an image, it opens in a larger preview using a
lightbox. The preview can be closed using the close button, the
Escape key, or by clicking outside the image.

## 🎯 Objective

The objective of this task was to practice:

- CSS Grid
- Responsive layouts
- JavaScript click events
- DOM manipulation
- Lightbox interaction
- Image accessibility
- Basic UI interaction

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

## ✨ Features

- Responsive image grid
- 8 images
- Clickable images
- Large image preview
- Lightbox modal
- Close button
- Escape key support
- Click-outside-to-close
- Alt text for every image
- Responsive design
- Lazy loading for gallery images

## 🖼️ Image Gallery

The gallery contains 8 landscape images sourced from Unsplash.

Each image includes descriptive alt text for accessibility.

## 🔍 Lightbox Preview

When a gallery image is clicked, JavaScript:

1. Gets the selected image URL.
2. Gets the image alt text.
3. Places the image inside the lightbox.
4. Displays the lightbox.
5. Prevents the background page from scrolling.

Example:

```javascript
const imageSource = button.dataset.image;
const imageAlt = button.dataset.alt;

openLightbox(imageSource, imageAlt);
