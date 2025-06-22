// // import React, { useState } from 'react';
// // import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

// // const AudioConverter = () => {
// //   const [wavFile, setWavFile] = useState(null);
// //   const [mp3Url, setMp3Url] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const ffmpeg = createFFmpeg({ log: true });

// //   const convertToMp3 = async () => {
// //     setLoading(true);

// //     if (!ffmpeg.isLoaded()) {
// //       await ffmpeg.load();
// //     }

// //     // Write the .wav file to the in-memory FS
// //     ffmpeg.FS('writeFile', 'input.wav', await fetchFile(wavFile));

// //     // Convert input.wav → output.mp3
// //     await ffmpeg.run('-i', 'input.wav', 'output.mp3');

// //     // Read the result and create a URL
// //     const data = ffmpeg.FS('readFile', 'output.mp3');
// //     const url = URL.createObjectURL(new Blob([data.buffer], { type: 'audio/mp3' }));

// //     setMp3Url(url);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="p-4">
// //       <input
// //         type="file"
// //         accept=".wav"
// //         onChange={(e) => setWavFile(e.target.files?.item(0))}
// //       />
// //       <button
// //         onClick={convertToMp3}
// //         disabled={!wavFile}
// //         className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
// //       >
// //         Convert WAV to MP3
// //       </button>

// //       {loading && <p>Converting...</p>}
// //       {mp3Url && (
// //         <div className="mt-4">
// //           <audio src={mp3Url} controls />
// //           <a href={mp3Url} download="converted.mp3" className="block mt-2 text-blue-700 underline">
// //             Download MP3
// //           </a>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AudioConverter;
// import React, { useState } from 'react';
// import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

// // Load FFmpeg at top level
// const ffmpeg = createFFmpeg({ log: true });

// const AudioConverter = () => {
//   const [file, setFile] = useState(null);
//   const [outputUrl, setOutputUrl] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const convertAudio = async () => {
//     setLoading(true);

//     if (!ffmpeg.isLoaded()) {
//       await ffmpeg.load();
//     }

//     ffmpeg.FS('writeFile', 'input.wav', await fetchFile(file));
//     await ffmpeg.run('-i', 'input.wav', 'output.mp3');
//     const data = ffmpeg.FS('readFile', 'output.mp3');

//     const url = URL.createObjectURL(new Blob([data.buffer], { type: 'audio/mp3' }));
//     setOutputUrl(url);
//     setLoading(false);
//   };

//   return (
//     <div>
//       <input type="file" accept=".wav" onChange={(e) => setFile(e.target.files?.[0])} />
//       <button onClick={convertAudio} disabled={!file}>Convert</button>
//       {loading && <p>Converting...</p>}
//       {outputUrl && (
//         <>
//           <audio controls src={outputUrl}></audio>
//           <a href={outputUrl} download="output.mp3">Download MP3</a>
//         </>
//       )}
//     </div>
//   );
// };

// export default AudioConverter;

import React from 'react'

export const temp = () => {
  return (
    <div>temp</div>
  )
}
