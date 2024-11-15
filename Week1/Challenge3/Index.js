const images = [
    {
      fullSize: 'images/img1.jpg',
      thumbnail: 'images/img1.jpg',
      caption: 'Caption 1'
    },
    {
        fullSize: 'images/img2.jpg',
        thumbnail: 'images/img2.jpg',
      caption: 'Caption 2'
    },
    {
        fullSize: 'images/img3.jpg',
        thumbnail: 'images/img3.jpg',
      caption: 'Caption 3'
    },
    {
        fullSize: 'images/img4.jpg',
        thumbnail: 'images/img4.jpg',
        caption: 'Caption 1'
      },
      {
          fullSize: 'images/img5.jpg',
          thumbnail: 'images/img5.jpg',
        caption: 'Caption 2'
      },
      {
          fullSize: 'images/img6.jpg',
          thumbnail: 'images/img6.jpg',
        caption: 'Caption 3'
      },
      {
        fullSize: 'images/img7.jpg',
        thumbnail: 'images/img7.jpg',
        caption: 'Caption 1'
      },
      {
          fullSize: 'images/img8.jpg',
          thumbnail: 'images/img8.jpg',
        caption: 'Caption 2'
      },
      {
          fullSize: 'images/img9.jpg',
          thumbnail: 'images/img9.jpg',
        caption: 'Caption 3'
      },
      {
        fullSize: 'images/img0.jpg',
        thumbnail: 'images/img0.jpg',
        caption: 'Caption 1'
      },
      {
        fullSize: 'images/img11.jpg',
        thumbnail: 'images/img11.jpg',
        caption: 'Caption 1'
      },
    {
        fullSize: 'images/img20.jpg',
        thumbnail: 'images/img20.jpg',
        caption: 'Caption 1'
      }, {
          fullSize: 'images/img21.jpg',
          thumbnail: 'images/img21.jpg',
          caption: 'Caption 1'
        }, {
          fullSize: 'images/img22.jpg',
          thumbnail: 'images/img22.jpg',
          caption: 'Caption 1'
        },
    {
        fullSize: 'images/img12.jpg',
        thumbnail: 'images/img12.jpg',
      caption: 'Caption 2'
    },
    {
        fullSize: 'images/img13.jpg',
        thumbnail: 'images/img13.jpg',
      caption: 'Caption 3'
    },
    {
        fullSize: 'images/img15.jpg',
        thumbnail: 'images/img15.jpg',
      caption: 'Caption 3'
    },
    {
      fullSize: 'images/img16.jpg',
      thumbnail: 'images/img16.jpg',
      caption: 'Caption 1'
    },
    {
        fullSize: 'images/img17.jpg',
        thumbnail: 'images/img17.jpg',
      caption: 'Caption 2'
    },
    {
        fullSize: 'images/img18.jpg',
        thumbnail: 'images/img18.jpg',
      caption: 'Caption 3'
    },
    {
      fullSize: 'images/img19.jpg',
      thumbnail: 'images/img19.jpg',
      caption: 'Caption 1'
    },{
        fullSize: 'images/img14.jpg',
        thumbnail: 'images/img14.jpg',
        caption: 'Caption 1'
      },{
        fullSize: 'images/img10.jpg',
        thumbnail: 'images/img10.jpg',
      caption: 'Caption 3'
    },
   
    
  ];
  const gallery = document.querySelector('.gallery');

  images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = image.thumbnail;
    imgElement.alt = image.caption;
    imgElement.dataset.index = index; 
    gallery.appendChild(imgElement);
  
    imgElement.addEventListener('click', () => openLightbox(index));
  });
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const closeButton = document.querySelector('.close');
  
  let currentIndex = 0;
  
  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[index].fullSize;
    caption.textContent = images[index].caption;
    lightbox.classList.remove('hidden');
     updateNavButtons();
  }
  
  function closeLightbox() {
    lightbox.classList.add('hidden');
  }
  
  function showNext() {
    if (currentIndex < images.length - 1) {
      openLightbox(currentIndex + 1);
    }
  }
  
  function showPrev() {
    if (currentIndex > 0) {
      openLightbox(currentIndex - 1);
    }
  }
  
  function updateNavButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
  }
  
  nextButton.addEventListener('click', showNext);
  prevButton.addEventListener('click', showPrev);
  closeButton.addEventListener('click', closeLightbox);
      