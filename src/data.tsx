// import { parseWebStream } from 'music-metadata';

interface Image {
  url: string;
  alt: string;
}

interface Album {
  id: number;
  image: Image;
  name: string;
}


export const albums: Album[] = [
  {
    id: 1,
    image: {
      url: "https://fastly.picsum.photos/id/648/200/200.jpg?hmac=Kb_qhDdDfOGevrbabLvz4Tp3fu-M7DxQE6APqQRnwVw",
      alt: "none",
    },
    name: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    id: 2,
    image: {
      url: "https://fastly.picsum.photos/id/547/200/200.jpg?hmac=04fFD0MMF_hIH8HFysMTH_z8R7CwblctCIrBpdzouJs",
      alt: "none",
    },
    name: "Лунный шпагат",
  },
  {
    id: 3,
    image: {
      url: "https://fastly.picsum.photos/id/247/200/200.jpg?hmac=oKt3N5MCdI8hCrzIbokjpVNzUuywbK64CJn1bfRAxbA",
      alt: "none",
    },
    name: "Пустынный день",
  },
  {
    id: 4,
    image: {
      url: "https://fastly.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0",
      alt: "none",
    },
    name: "Морской бриз",
  },
  {
    id: 5,
    image: {
      url: "https://fastly.picsum.photos/id/764/200/200.jpg?hmac=g-JXLL-Box0-4IF64xLkh-OYHpc0kuCIXsRTuaqEPhQ",
      alt: "none",
    },
    name: "Солнечные ландыши",
  },
  {
    id: 6,
    image: {
      url: "https://fastly.picsum.photos/id/1056/200/200.jpg?hmac=BpHmd2Nrxgn5zfvO7PpucBxqHz3jz2foKNNSFK1VG40",
      alt: "none",
    },
    name: "Родео по сафари",
  },
  {
    id: 7,
    image: {
      url: "https://fastly.picsum.photos/id/797/200/200.jpg?hmac=-S9mzdkNyeh-FXTUE04cyqzvAV1W2D80OVQtTQHNt-k",
      alt: "none",
    },
    name: "Что-то оранжевое",
  },
  {
    id: 8,
    image: {
      url: "https://fastly.picsum.photos/id/685/200/200.jpg?hmac=1IjDFMSIa0T_JSvcq79_e2NWPwRJg61Ufbfu4eM4HvA",
      alt: "none",
    },
    name: "Расслабляющая музыка",
  },
  {
    id: 9,
    image: {
      url: "https://fastly.picsum.photos/id/883/200/200.jpg?hmac=evNCTcW3jHI_xOnAn7LKuFH_YkA8r6WdQovmsyoM1IY",
      alt: "none",
    },
    name: "",
  },
  {
    id: 10,
    image: {
      url: "https://fastly.picsum.photos/id/566/200/200.jpg?hmac=b6_RMcsCCCu5ULi6A3V8vdRrnNhtsnbHdakcGNIQd8s",
      alt: "none",
    },
    name: "",
  },
  {
    id: 11,
    image: {
      url: "https://fastly.picsum.photos/id/660/200/200.jpg?hmac=5UOdBCKDcPq_zS0RAVkvSD934EYVyCEdExCagJur-g8",
      alt: "none",
    },
    name: "",
  },
  {
    id: 12,
    image: {
      url: "https://fastly.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk",
      alt: "none",
    },
    name: "",
  },
  {
    id: 13,
    image: {
      url: "https://fastly.picsum.photos/id/363/200/200.jpg?hmac=SBPURboHSIW7ZkMg7-1Avrd7YtNzsNwXdOLrhu75mf4",
      alt: "none",
    },
    name: "",
  },
  {
    id: 14,
    image: {
      url: "https://fastly.picsum.photos/id/570/200/200.jpg?hmac=fgqmD9u8TqyXJG9fhqV-EbhIUXYwTIxfsPiNfaD28_Y",
      alt: "none",
    },
    name: "Эльдар Джарахов",
  },
];


interface User {
  firstName: string;
}

export const user: User = {
  firstName: "liza",
};


interface Track {
  id: number;
  url: string | undefined;
  img: Image;
  artistName: string | null;
  songName: string | null;
  like: boolean;
  playing: boolean,
}

export const trackData: Track[] = [
  {
    id: 1,
    url: "temp/Mnogoznaal - Гостиница Космос.mp3",
    artistName: "Mnogoznaal",
    songName: "Гостиница Космос",
    img: {
      url: 'https://images.genius.com/b834342ff0f78e183f9452d8b59d8043.1000x1000x1.png',
      alt: 'Какое-то описание',
    },
    like: true,
    playing: true,
  },
  {
    id: 2,
    url: "temp/Mnogoznaal - Гостиница Космос.mp3",
    artistName: "Лизочкина",
    songName: "Песня",
    img: {
      url: 'https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg',
      alt: 'Какое-то описание',
    },
    like: true,
    playing: false,
  },
];



// async function parsingMetaData (trackURL: RequestInfo | URL): Promise<string> {
// try {
// // Assuming you have a ReadableStream of an audio file
// const response = await fetch(trackURL);
// const webStream = response.body;

//     // Parse the metadata from the web stream
//     const metadata = await parseWebStream(webStream, 'audio/mpeg');

//     // Log the parsed metadata
//     console.log(metadata.common.artist);
//     console.log(metadata.common.picture);
//     if (metadata.common.artist) {
//       return metadata.common.artist
//     }
// } catch (error: unknown) {
//   if (error instanceof Error) {
//     console.error('Error parsing metadata:', error.message);
//   } else {
//     console.log('An unknown error occurred')
//   }
// }
// };

// async function updateArtistName() {
//   try {
//     trackData[0].artistName = await parsingMetaData(trackData[0].url)
//     console.log('Artist name updated: ', trackData[0].artistName)
//   } catch (error) {
//     console.error('Error updating artist name', error)
//   }
// }

// updateArtistName()