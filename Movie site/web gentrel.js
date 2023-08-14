function createShareButton( message) {
    navigator.share({
      title: message,
      text: message,
      url: window.location.href,
    })
      .then(() => console.log('Share was successful.'))
      .catch((error) => console.log('Sharing failed:', error));
  
};