new Glide(".images",{
    type: 'carousel',
    perView: 5,
    draggable : false,
    focusAt: 'center',
    dragThreshold: false,
    gap: 40,
    breakpoints: {
      1400:{
        perView: 4
      },
      1200:{
        perView: 3
      },
      800:{
        perView: 2
      },
    }
  }).mount();
