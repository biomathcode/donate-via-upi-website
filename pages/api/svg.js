// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const query = req.query;

  console.log(query.text);

  res.setHeader("content-type", "image/svg+xml");

  res
    .status(200)
    .send(
      '<svg width="176" height="46" viewBox="0 0 176 46" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d_75_11)"> <rect width="167.787" height="38" rx="10" fill="#353434" />   </g> <path d="M43.4545 25H40.0043V14.8182H43.5241C44.535 14.8182 45.4034 15.022 46.1293 15.4297C46.8584 15.834 47.4186 16.4157 47.8097 17.1747C48.2008 17.9337 48.3963 18.8419 48.3963 19.8991C48.3963 20.9598 48.1991 21.8712 47.8047 22.6335C47.4136 23.3958 46.8485 23.9808 46.1094 24.3885C45.3736 24.7962 44.4886 25 43.4545 25ZM41.8487 23.4041H43.3651C44.0743 23.4041 44.666 23.2749 45.1399 23.0163C45.6139 22.7545 45.9702 22.3651 46.2088 21.848C46.4474 21.3277 46.5668 20.678 46.5668 19.8991C46.5668 19.1203 46.4474 18.474 46.2088 17.9602C45.9702 17.4432 45.6172 17.0571 45.1499 16.8018C44.6858 16.5433 44.1091 16.4141 43.4197 16.4141H41.8487V23.4041ZM54.2402 25.1491C53.4945 25.1491 52.8482 24.9851 52.3013 24.657C51.7544 24.3288 51.3302 23.8698 51.0286 23.2798C50.7303 22.6899 50.5811 22.0005 50.5811 21.2116C50.5811 20.4228 50.7303 19.7318 51.0286 19.1385C51.3302 18.5452 51.7544 18.0845 52.3013 17.7564C52.8482 17.4283 53.4945 17.2642 54.2402 17.2642C54.986 17.2642 55.6323 17.4283 56.1791 17.7564C56.726 18.0845 57.1486 18.5452 57.4469 19.1385C57.7485 19.7318 57.8993 20.4228 57.8993 21.2116C57.8993 22.0005 57.7485 22.6899 57.4469 23.2798C57.1486 23.8698 56.726 24.3288 56.1791 24.657C55.6323 24.9851 54.986 25.1491 54.2402 25.1491ZM54.2502 23.7074C54.6545 23.7074 54.9926 23.5964 55.2644 23.3743C55.5361 23.1489 55.7383 22.8473 55.8709 22.4695C56.0068 22.0916 56.0747 21.6707 56.0747 21.2067C56.0747 20.7393 56.0068 20.3168 55.8709 19.9389C55.7383 19.5578 55.5361 19.2545 55.2644 19.0291C54.9926 18.8037 54.6545 18.6911 54.2502 18.6911C53.8359 18.6911 53.4912 18.8037 53.2161 19.0291C52.9443 19.2545 52.7404 19.5578 52.6046 19.9389C52.472 20.3168 52.4057 20.7393 52.4057 21.2067C52.4057 21.6707 52.472 22.0916 52.6046 22.4695C52.7404 22.8473 52.9443 23.1489 53.2161 23.3743C53.4912 23.5964 53.8359 23.7074 54.2502 23.7074ZM62.0665 20.5256V25H60.2668V17.3636H61.987V18.6612H62.0765C62.2521 18.2337 62.5322 17.8939 62.9167 17.642C63.3045 17.3902 63.7834 17.2642 64.3535 17.2642C64.8805 17.2642 65.3395 17.3769 65.7306 17.6023C66.125 17.8277 66.4299 18.1541 66.6454 18.5817C66.8641 19.0092 66.9718 19.5279 66.9685 20.1378V25H65.1688V20.4162C65.1688 19.9058 65.0362 19.5064 64.7711 19.218C64.5092 18.9297 64.1463 18.7855 63.6823 18.7855C63.3674 18.7855 63.0874 18.8551 62.8421 18.9943C62.6002 19.1302 62.4096 19.3274 62.2704 19.5859C62.1345 19.8445 62.0665 20.1577 62.0665 20.5256ZM71.8355 25.1541C71.3516 25.1541 70.9158 25.0679 70.528 24.8956C70.1435 24.7199 69.8386 24.4614 69.6132 24.12C69.3912 23.7786 69.2801 23.3577 69.2801 22.8572C69.2801 22.4264 69.3597 22.0701 69.5188 21.7884C69.6778 21.5066 69.8949 21.2812 70.17 21.1122C70.4451 20.9432 70.755 20.8156 71.0997 20.7294C71.4477 20.6399 71.8073 20.5753 72.1786 20.5355C72.626 20.4891 72.9889 20.4477 73.2673 20.4112C73.5457 20.3714 73.7479 20.3118 73.8739 20.2322C74.0031 20.1494 74.0678 20.0218 74.0678 19.8494V19.8196C74.0678 19.4451 73.9567 19.1551 73.7347 18.9496C73.5126 18.7441 73.1928 18.6413 72.7751 18.6413C72.3343 18.6413 71.9847 18.7375 71.7261 18.9297C71.4709 19.1219 71.2986 19.349 71.2091 19.6108L69.5287 19.3722C69.6613 18.9081 69.88 18.5204 70.185 18.2088C70.4899 17.8939 70.8627 17.6586 71.3036 17.5028C71.7444 17.3438 72.2316 17.2642 72.7652 17.2642C73.1331 17.2642 73.4993 17.3073 73.8639 17.3935C74.2285 17.4796 74.5616 17.6222 74.8632 17.821C75.1648 18.0166 75.4068 18.2834 75.5891 18.6214C75.7747 18.9595 75.8675 19.3821 75.8675 19.8892V25H74.1374V23.951H74.0777C73.9683 24.1631 73.8142 24.362 73.6153 24.5476C73.4198 24.7299 73.1729 24.8774 72.8746 24.9901C72.5796 25.0994 72.2332 25.1541 71.8355 25.1541ZM72.3028 23.8317C72.6641 23.8317 72.9773 23.7604 73.2425 23.6179C73.5076 23.4721 73.7115 23.2798 73.854 23.0412C73.9998 22.8026 74.0727 22.5424 74.0727 22.2607V21.3608C74.0164 21.4072 73.9203 21.4503 73.7844 21.4901C73.6518 21.5298 73.5027 21.5646 73.3369 21.5945C73.1712 21.6243 73.0072 21.6508 72.8448 21.674C72.6823 21.6972 72.5415 21.7171 72.4222 21.7337C72.1537 21.7701 71.9134 21.8298 71.7013 21.9126C71.4892 21.9955 71.3218 22.1115 71.1992 22.2607C71.0765 22.4065 71.0152 22.5954 71.0152 22.8274C71.0152 23.1589 71.1362 23.4091 71.3781 23.5781C71.6201 23.7472 71.9283 23.8317 72.3028 23.8317ZM82.3303 17.3636V18.7557H77.9404V17.3636H82.3303ZM79.0242 15.5341H80.824V22.7031C80.824 22.9451 80.8604 23.1307 80.9333 23.2599C81.0096 23.3859 81.109 23.4721 81.2316 23.5185C81.3543 23.5649 81.4901 23.5881 81.6393 23.5881C81.752 23.5881 81.8547 23.5798 81.9475 23.5632C82.0437 23.5466 82.1166 23.5317 82.1663 23.5185L82.4696 24.9254C82.3734 24.9586 82.2359 24.995 82.0569 25.0348C81.8812 25.0746 81.6658 25.0978 81.4106 25.1044C80.9598 25.1177 80.5538 25.0497 80.1926 24.9006C79.8313 24.7481 79.5446 24.5128 79.3325 24.1946C79.1237 23.8764 79.0209 23.4787 79.0242 23.0014V15.5341ZM87.9741 25.1491C87.2085 25.1491 86.5473 24.9901 85.9905 24.6719C85.437 24.3504 85.0111 23.8963 84.7128 23.3097C84.4145 22.7197 84.2653 22.0253 84.2653 21.2266C84.2653 20.4411 84.4145 19.7517 84.7128 19.1584C85.0144 18.5618 85.4353 18.0978 85.9756 17.7663C86.5158 17.4316 87.1505 17.2642 87.8797 17.2642C88.3503 17.2642 88.7945 17.3404 89.2121 17.4929C89.633 17.642 90.0042 17.8741 90.3257 18.1889C90.6505 18.5038 90.9057 18.9048 91.0913 19.392C91.2769 19.8759 91.3697 20.4527 91.3697 21.1222V21.674H85.1105V20.4609H89.6446C89.6413 20.1162 89.5667 19.8097 89.4209 19.5412C89.275 19.2694 89.0712 19.0556 88.8094 18.8999C88.5509 18.7441 88.2492 18.6662 87.9045 18.6662C87.5366 18.6662 87.2135 18.7557 86.9351 18.9347C86.6567 19.1103 86.4396 19.3423 86.2838 19.6307C86.1313 19.9157 86.0535 20.2289 86.0501 20.5703V21.6293C86.0501 22.0734 86.1313 22.4545 86.2938 22.7727C86.4562 23.0876 86.6832 23.3295 86.9749 23.4986C87.2665 23.6643 87.6079 23.7472 87.999 23.7472C88.2608 23.7472 88.4978 23.7107 88.7099 23.6378C88.9221 23.5616 89.106 23.4505 89.2618 23.3047C89.4176 23.1589 89.5352 22.9782 89.6148 22.7628L91.2952 22.9517C91.1891 23.3958 90.9869 23.7836 90.6886 24.1151C90.3937 24.4432 90.0158 24.6984 89.5551 24.8807C89.0944 25.0597 88.5674 25.1491 87.9741 25.1491ZM99.4867 14.8182L102.137 22.8324H102.241L104.886 14.8182H106.914L103.325 25H101.048L97.4633 14.8182H99.4867ZM109.016 25V17.3636H110.816V25H109.016ZM109.921 16.2798C109.636 16.2798 109.39 16.1854 109.185 15.9964C108.979 15.8042 108.877 15.5739 108.877 15.3054C108.877 15.0336 108.979 14.8033 109.185 14.6143C109.39 14.4221 109.636 14.326 109.921 14.326C110.209 14.326 110.454 14.4221 110.656 14.6143C110.862 14.8033 110.965 15.0336 110.965 15.3054C110.965 15.5739 110.862 15.8042 110.656 15.9964C110.454 16.1854 110.209 16.2798 109.921 16.2798ZM115.704 25.1541C115.22 25.1541 114.784 25.0679 114.396 24.8956C114.012 24.7199 113.707 24.4614 113.481 24.12C113.259 23.7786 113.148 23.3577 113.148 22.8572C113.148 22.4264 113.228 22.0701 113.387 21.7884C113.546 21.5066 113.763 21.2812 114.038 21.1122C114.313 20.9432 114.623 20.8156 114.968 20.7294C115.316 20.6399 115.675 20.5753 116.047 20.5355C116.494 20.4891 116.857 20.4477 117.135 20.4112C117.414 20.3714 117.616 20.3118 117.742 20.2322C117.871 20.1494 117.936 20.0218 117.936 19.8494V19.8196C117.936 19.4451 117.825 19.1551 117.603 18.9496C117.381 18.7441 117.061 18.6413 116.643 18.6413C116.202 18.6413 115.853 18.7375 115.594 18.9297C115.339 19.1219 115.167 19.349 115.077 19.6108L113.397 19.3722C113.529 18.9081 113.748 18.5204 114.053 18.2088C114.358 17.8939 114.731 17.6586 115.172 17.5028C115.612 17.3438 116.1 17.2642 116.633 17.2642C117.001 17.2642 117.367 17.3073 117.732 17.3935C118.097 17.4796 118.43 17.6222 118.731 17.821C119.033 18.0166 119.275 18.2834 119.457 18.6214C119.643 18.9595 119.736 19.3821 119.736 19.8892V25H118.005V23.951H117.946C117.836 24.1631 117.682 24.362 117.483 24.5476C117.288 24.7299 117.041 24.8774 116.743 24.9901C116.448 25.0994 116.101 25.1541 115.704 25.1541ZM116.171 23.8317C116.532 23.8317 116.845 23.7604 117.111 23.6179C117.376 23.4721 117.58 23.2798 117.722 23.0412C117.868 22.8026 117.941 22.5424 117.941 22.2607V21.3608C117.885 21.4072 117.788 21.4503 117.653 21.4901C117.52 21.5298 117.371 21.5646 117.205 21.5945C117.039 21.6243 116.875 21.6508 116.713 21.674C116.55 21.6972 116.41 21.7171 116.29 21.7337C116.022 21.7701 115.782 21.8298 115.569 21.9126C115.357 21.9955 115.19 22.1115 115.067 22.2607C114.945 22.4065 114.883 22.5954 114.883 22.8274C114.883 23.1589 115.004 23.4091 115.246 23.5781C115.488 23.7472 115.796 23.8317 116.171 23.8317ZM133.196 14.8182H135.04V21.4702C135.04 22.1993 134.868 22.8407 134.523 23.3942C134.182 23.9477 133.701 24.3802 133.081 24.6918C132.462 25 131.737 25.1541 130.909 25.1541C130.077 25.1541 129.351 25 128.731 24.6918C128.112 24.3802 127.631 23.9477 127.29 23.3942C126.948 22.8407 126.777 22.1993 126.777 21.4702V14.8182H128.622V21.3161C128.622 21.7403 128.715 22.1181 128.9 22.4496C129.089 22.781 129.354 23.0412 129.696 23.2301C130.037 23.4157 130.442 23.5085 130.909 23.5085C131.376 23.5085 131.781 23.4157 132.122 23.2301C132.467 23.0412 132.732 22.781 132.917 22.4496C133.103 22.1181 133.196 21.7403 133.196 21.3161V14.8182ZM137.885 25V14.8182H141.703C142.485 14.8182 143.142 14.964 143.672 15.2557C144.206 15.5473 144.608 15.9484 144.88 16.4588C145.155 16.9659 145.293 17.5426 145.293 18.1889C145.293 18.8419 145.155 19.4219 144.88 19.929C144.605 20.4361 144.199 20.8355 143.662 21.1271C143.125 21.4155 142.464 21.5597 141.678 21.5597H139.148V20.0433H141.43C141.887 20.0433 142.262 19.9638 142.553 19.8047C142.845 19.6456 143.06 19.4268 143.2 19.1484C143.342 18.87 143.413 18.5502 143.413 18.1889C143.413 17.8277 143.342 17.5095 143.2 17.2344C143.06 16.9593 142.843 16.7455 142.548 16.593C142.257 16.4373 141.881 16.3594 141.42 16.3594H139.73V25H137.885ZM149.579 14.8182V25H147.735V14.8182H149.579Z" fill="#E5E5E5" /> <defs> <filter id="filter0_d_75_11" x="0" y="0" width="175.787" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dx="4" dy="4" /> <feGaussianBlur stdDeviation="2" /> <feComposite in2="hardAlpha" operator="out" />  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_75_11" /> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_75_11" result="shape" />  </filter> </defs></svg>'
    );
}
