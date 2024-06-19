const toCapital = str => {
    const words = str.split(" ");
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  };
  
  const shortStr = "Hi there";
  toCapital(shortStr); // Hi There
  console.log(toCapital(shortStr));
  
  const longStr = "the quick brown fox jumped over the lazy dog";
  toCapital(longStr); // The Quick Brown Fox Jumped Over The Lazy Dog
  console.log(toCapital(longStr));
  //Yorum ekle Bir stringin bas harflerini buyuk harf yapma metodu