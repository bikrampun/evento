import * as AllIcons from "lucide-react"

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  ...AllIcons,
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),

  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  logo: (props: IconProps & { mode?: "dark" | "light" }) => (
    <svg
      width="79"
      height="32"
      viewBox="0 0 79 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M71.5161 12.4114C71.1969 14.4535 69.9319 16.1127 68.2374 17.0124C66.8984 15.638 66.2003 13.6717 66.5193 11.6296C66.8386 9.5875 68.1035 7.9283 69.798 7.02835C71.1371 8.403 71.8354 10.3692 71.5161 12.4114Z"
        fill="#C83316"
      />
      <path
        opacity="0.2"
        d="M71.5161 12.4114C71.6242 11.7199 71.6131 11.0378 71.5024 10.3837C70.9165 10.6945 70.3692 11.1012 69.887 11.6083C68.4627 13.1056 67.9181 15.12 68.2374 17.0124C69.9319 16.1127 71.1968 14.4535 71.5161 12.4114Z"
        fill="#370D32"
      />
      <path
        d="M74.7523 16.4708C72.7101 17.7153 70.2989 17.8376 68.2374 17.0124C68.4503 14.8013 69.6649 12.7143 71.7073 11.4696C73.7495 10.2252 76.1607 10.1028 78.2222 10.928C78.0091 13.1393 76.7945 15.2264 74.7523 16.4708Z"
        fill="#F84616"
      />
      <path
        d="M74.0992 9.85649C73.5623 10.1836 72.9284 10.2158 72.3863 9.99887C72.4423 9.41757 72.7616 8.86887 73.2986 8.5416C73.8355 8.21433 74.4694 8.1823 75.0115 8.39923C74.9555 8.98052 74.636 9.52922 74.0992 9.85649Z"
        fill="#F84616"
      />
      <path
        d="M75.597 18.7175C74.9705 18.7698 74.3892 18.5147 74.0016 18.078C74.3117 17.5832 74.8428 17.2356 75.4693 17.1833C76.0959 17.131 76.6771 17.3862 77.0647 17.8228C76.7545 18.3176 76.2234 18.6653 75.597 18.7175Z"
        fill="#F84616"
      />
      <path
        d="M73.5848 6.59784C73.4059 7.40637 72.8588 8.03787 72.1588 8.35521C71.6579 7.77223 71.4279 6.96858 71.6068 6.16005C71.7856 5.35152 72.3328 4.72002 73.0327 4.40268C73.5337 4.98585 73.7636 5.7895 73.5848 6.59784Z"
        fill="#F84616"
      />
      <path
        d="M69.5095 23.2032C67.4693 23.5305 65.5012 22.8398 64.1221 21.5056C65.0149 19.8069 66.6684 18.5349 68.7086 18.2076C70.7487 17.8803 72.7168 18.571 74.096 19.9054C73.2031 21.6041 71.5496 22.8759 69.5095 23.2032Z"
        fill="#FA811D"
      />
      <path
        opacity="0.2"
        d="M69.5095 23.2032C70.2003 23.0923 70.8454 22.8711 71.433 22.5637C70.9566 22.1023 70.4006 21.7072 69.7696 21.405C67.906 20.5126 65.8227 20.6171 64.1221 21.5054C65.5012 22.8398 67.4695 23.5307 69.5095 23.2032Z"
        fill="#370D32"
      />
      <path
        d="M66.6502 27.5368C64.8361 25.9782 63.9747 23.7221 64.1221 21.5056C66.2899 21.0249 68.6494 21.5356 70.4636 23.0942C72.2777 24.6528 73.1391 26.9088 72.9917 29.1253C70.824 29.6059 68.4646 29.0952 66.6502 27.5368Z"
        fill="#FAD01D"
      />
      <path
        d="M72.7367 24.8714C72.2597 24.4617 72.0333 23.8684 72.0721 23.2858C72.6421 23.1594 73.2623 23.2937 73.7392 23.7034C74.2162 24.1131 74.4426 24.7064 74.4038 25.289C73.834 25.4154 73.2136 25.2811 72.7367 24.8714Z"
        fill="#FAD01D"
      />
      <path
        d="M64.7754 29.0347C64.5321 28.4547 64.5951 27.8228 64.8904 27.3191C65.4566 27.4613 65.9512 27.859 66.1944 28.439C66.4377 29.0189 66.3748 29.6508 66.0795 30.1546C65.5134 30.0124 65.0186 29.6147 64.7754 29.0347Z"
        fill="#FAD01D"
      />
      <path
        d="M75.6755 23.375C74.8517 23.4548 74.0821 23.1292 73.5641 22.5612C73.9638 21.9044 74.6566 21.4374 75.4804 21.3576C76.3041 21.2778 77.0737 21.6034 77.5917 22.1714C77.1923 22.8282 76.4994 23.2952 75.6755 23.375Z"
        fill="#FAD01D"
      />
      <path
        d="M58.6298 24.629C57.6883 22.7892 57.7368 20.7031 58.579 18.9787C60.47 19.3033 62.1901 20.4835 63.1317 22.3233C64.0732 24.1631 64.0247 26.2492 63.1824 27.9736C61.2917 27.6492 59.5715 26.469 58.6298 24.629Z"
        fill="#008560"
      />
      <path
        opacity="0.2"
        d="M58.6298 24.629C58.9487 25.2521 59.3584 25.7972 59.8322 26.2614C60.1236 25.6655 60.3275 25.0145 60.4196 24.3208C60.6921 22.272 59.949 20.322 58.5789 18.9787C57.7368 20.7031 57.6883 22.7892 58.6298 24.629Z"
        fill="#370D32"
      />
      <path
        d="M53.6266 23.2478C54.5478 21.0401 56.4263 19.5234 58.5791 18.9787C59.706 20.8926 59.9496 23.2954 59.0285 25.5031C58.1075 27.7108 56.2288 29.2275 54.0761 29.7722C52.9491 27.8582 52.7055 25.4555 53.6266 23.2478Z"
        fill="#05B178"
      />
      <path
        d="M58.0412 28.2149C58.2834 27.6345 58.7774 27.2357 59.3432 27.0926C59.6395 27.5958 59.7035 28.2275 59.4614 28.808C59.2193 29.3884 58.7253 29.7872 58.1594 29.9303C57.8632 29.4269 57.7991 28.7953 58.0412 28.2149Z"
        fill="#05B178"
      />
      <path
        d="M51.6232 21.9269C52.0994 21.5163 52.7194 21.3808 53.2896 21.5062C53.3295 22.0888 53.104 22.6824 52.6278 23.0931C52.1516 23.5037 51.5316 23.6391 50.9614 23.5138C50.9217 22.931 51.147 22.3375 51.6232 21.9269Z"
        fill="#05B178"
      />
      <path
        d="M60.3721 30.5487C60.0417 29.7896 60.1133 28.9568 60.4932 28.2885C61.2409 28.4658 61.8991 28.9806 62.2295 29.7398C62.5598 30.4989 62.4883 31.3318 62.1083 32C61.3606 31.8228 60.7024 31.3078 60.3721 30.5487Z"
        fill="#05B178"
      />
      <path
        d="M53.9124 14.7183C55.3706 13.254 57.3688 12.6554 59.2684 12.9239C59.5442 14.8233 58.9538 16.8245 57.4956 18.2889C56.0374 19.7533 54.0392 20.3518 52.1397 20.0834C51.8638 18.184 52.4542 16.1827 53.9124 14.7183Z"
        fill="#8B41D3"
      />
      <path
        opacity="0.2"
        d="M53.9124 14.7183C53.4186 15.2142 53.0269 15.7725 52.7321 16.3667C53.3886 16.4598 54.0704 16.4527 54.7586 16.326C56.7907 15.9521 58.4146 14.6427 59.2685 12.9239C57.3688 12.6554 55.3706 13.254 53.9124 14.7183Z"
        fill="#370D32"
      />
      <path
        d="M53.6797 9.53108C56.0631 9.72516 58.0855 11.044 59.2685 12.9239C57.7973 14.5876 55.5882 15.5617 53.2048 15.3678C50.8214 15.1737 48.799 13.8549 47.6159 11.975C49.0872 10.3113 51.2961 9.33701 53.6797 9.53108Z"
        fill="#D05AF1"
      />
      <path
        d="M50.3216 15.2665C50.9481 15.3174 51.4799 15.6642 51.791 16.1584C51.4041 16.5958 50.8234 16.8519 50.1969 16.8009C49.5703 16.75 49.0385 16.4032 48.7274 15.909C49.1143 15.4716 49.695 15.2153 50.3216 15.2665Z"
        fill="#D05AF1"
      />
      <path
        d="M54.3162 7.21698C54.8538 7.54312 55.174 8.09126 55.2311 8.67255C54.6895 8.89042 54.0555 8.85951 53.5181 8.53337C52.9804 8.20722 52.6602 7.65908 52.6031 7.07779C53.1447 6.85973 53.7787 6.89064 54.3162 7.21698Z"
        fill="#D05AF1"
      />
      <path
        d="M48.8231 18.2052C49.4428 17.6563 50.2566 17.4671 51.0094 17.622C51.0721 18.3882 50.7858 19.1735 50.1663 19.7226C49.5467 20.2714 48.7329 20.4606 47.9801 20.3057C47.9174 19.5393 48.2035 18.754 48.8231 18.2052Z"
        fill="#D05AF1"
      />
      <path
        d="M61.8766 7.16734C63.7195 8.10213 64.9059 9.81829 65.2377 11.7087C63.5172 12.558 61.4323 12.6146 59.5895 11.6798C57.7467 10.745 56.5602 9.02887 56.2284 7.13849C57.9487 6.28931 60.0338 6.23255 61.8766 7.16734Z"
        fill="#027DFF"
      />
      <path
        opacity="0.2"
        d="M61.8767 7.16735C61.2527 6.85076 60.6009 6.65069 59.9449 6.55365C60.0593 7.20707 60.2769 7.85355 60.6099 8.46913C61.5933 10.287 63.3401 11.4275 65.2378 11.7087C64.9057 9.8183 63.7193 8.10214 61.8767 7.16735Z"
        fill="#370D32"
      />
      <path
        d="M66.736 5.34291C67.288 7.67052 66.6592 10.0023 65.2377 11.7089C63.2015 10.823 61.5928 9.0225 61.0407 6.69471C60.4887 4.3671 61.1175 2.03537 62.539 0.328766C64.575 1.21466 66.184 3.0153 66.736 5.34291Z"
        fill="#02A8FF"
      />
      <path
        d="M60.2458 3.92031C60.391 4.53233 60.2256 5.14528 59.8518 5.59394C59.3165 5.36109 58.8935 4.8877 58.7483 4.27568C58.6032 3.66367 58.7686 3.05071 59.1423 2.60205C59.6777 2.83491 60.1007 3.3083 60.2458 3.92031Z"
        fill="#02A8FF"
      />
      <path
        d="M69.1327 5.23352C68.9887 5.84572 68.5666 6.31986 68.0316 6.55384C67.6571 6.10593 67.4906 5.49316 67.6346 4.88096C67.7786 4.26875 68.2007 3.79462 68.7355 3.56064C69.1102 4.00855 69.2767 4.62132 69.1327 5.23352Z"
        fill="#02A8FF"
      />
      <path
        d="M56.989 3.4027C57.7023 3.8227 58.1338 4.5385 58.219 5.30263C57.5098 5.59899 56.6748 5.56939 55.9616 5.14957C55.2483 4.72957 54.8169 4.01378 54.7317 3.24965C55.4408 2.95329 56.2758 2.98288 56.989 3.4027Z"
        fill="#02A8FF"
      />
      <path
        d="M62.6878 21.1865C61.7366 21.1865 60.9225 20.9533 60.2454 20.4868C59.5844 20.0041 59.0846 19.3768 58.746 18.6046C58.4075 17.8324 58.2382 17.0039 58.2382 16.1191C58.2382 14.8965 58.4639 13.8107 58.9153 12.8615C59.3828 11.8963 60.0116 11.1483 60.8016 10.6174C61.5915 10.0704 62.4782 9.79697 63.4617 9.79697C64.4129 9.79697 65.227 10.0383 65.9041 10.5209C66.5812 10.9874 67.0891 11.6068 67.4276 12.3789C67.7662 13.1511 67.9355 13.9796 67.9355 14.8644C67.9355 16.087 67.7017 17.1809 67.2342 18.1461C66.7666 19.0952 66.1298 19.8433 65.3237 20.3902C64.5338 20.9211 63.6551 21.1865 62.6878 21.1865ZM62.9538 18.5805C63.502 18.5805 63.9614 18.2828 64.3323 17.6876C64.7192 17.0924 64.9126 16.2237 64.9126 15.0815C64.9126 14.1968 64.7514 13.5291 64.429 13.0787C64.1065 12.6283 63.7196 12.4031 63.2682 12.4031C62.6878 12.4031 62.2042 12.7007 61.8172 13.2959C61.4464 13.875 61.261 14.7437 61.261 15.902C61.261 16.8189 61.4223 17.4946 61.7447 17.9289C62.0671 18.3633 62.4702 18.5805 62.9538 18.5805Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
      <path
        d="M59.8928 15.6848C60.1024 15.6848 60.2636 15.7813 60.3765 15.9744C60.5054 16.1674 60.5699 16.4328 60.5699 16.7707C60.5699 17.4141 60.4168 17.9128 60.1105 18.2668C59.4172 19.1194 58.6595 19.8191 57.8373 20.3661C57.0151 20.9131 56.0719 21.1865 55.0079 21.1865C51.719 21.1865 50.0746 18.8781 50.0746 14.2611C50.0746 13.5533 50.0988 12.8374 50.1472 12.1135H49.204C48.7204 12.1135 48.3899 12.025 48.2125 11.8481C48.0513 11.6711 47.9707 11.3896 47.9707 11.0035C47.9707 10.1026 48.3334 9.65218 49.0589 9.65218H50.4373C50.7114 7.88262 51.1306 6.26588 51.6949 4.80196C52.2591 3.33805 52.9362 2.17174 53.7262 1.30304C54.5323 0.434348 55.3948 0 56.3138 0C56.9909 0 57.5229 0.297609 57.9098 0.892827C58.2967 1.48804 58.4902 2.23609 58.4902 3.13696C58.4902 5.63044 57.4423 7.80218 55.3465 9.65218H58.0549C58.3129 9.65218 58.4983 9.70849 58.6111 9.8211C58.724 9.9337 58.7804 10.1428 58.7804 10.4485C58.7804 11.5585 57.8695 12.1135 56.0478 12.1135H53.0975C53.0652 12.9178 53.0491 13.5452 53.0491 13.9957C53.0491 15.6687 53.2426 16.8431 53.6295 17.5187C54.0325 18.1944 54.6613 18.5322 55.5157 18.5322C56.209 18.5322 56.8216 18.3231 57.3536 17.9048C57.8856 17.4865 58.5144 16.8591 59.2399 16.0226C59.4333 15.7974 59.651 15.6848 59.8928 15.6848ZM55.6608 2.31652C55.419 2.31652 55.1449 2.62218 54.8386 3.23348C54.5484 3.8287 54.2663 4.66522 53.9922 5.74305C53.7343 6.80479 53.5166 7.98718 53.3393 9.29023C54.2905 8.46979 54.9998 7.55283 55.4674 6.53935C55.951 5.50979 56.1929 4.57674 56.1929 3.74022C56.1929 2.79109 56.0155 2.31652 55.6608 2.31652Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
      <path
        d="M38.8273 21.1866C38.2147 21.1866 37.7794 20.8648 37.5215 20.2213C37.2796 19.5779 37.1587 18.5483 37.1587 17.1326C37.1587 15.0413 37.457 13.0546 38.0535 11.1724C38.1986 10.7059 38.4324 10.3681 38.7548 10.1589C39.0933 9.93371 39.5609 9.82111 40.1574 9.82111C40.4798 9.82111 40.7055 9.86132 40.8345 9.94176C40.9635 10.0222 41.028 10.175 41.028 10.4002C41.028 10.6576 40.9071 11.2368 40.6652 12.1376C40.504 12.7811 40.375 13.3442 40.2783 13.8268C40.1816 14.3094 40.101 14.9046 40.0365 15.6124C40.5685 14.2289 41.165 13.1028 41.826 12.2342C42.487 11.3655 43.1319 10.7461 43.7606 10.3761C44.4055 10.0061 44.9939 9.82111 45.526 9.82111C46.5739 9.82111 47.0978 10.3439 47.0978 11.3896C47.0978 12.017 46.9205 13.1511 46.5658 14.792C46.2595 16.1915 46.1064 17.1165 46.1064 17.567C46.1064 18.2105 46.3401 18.5322 46.8077 18.5322C47.1301 18.5322 47.509 18.3392 47.9442 17.9531C48.3957 17.5509 48.9922 16.9074 49.7338 16.0226C49.9272 15.7974 50.1449 15.6848 50.3867 15.6848C50.5963 15.6848 50.7575 15.7813 50.8704 15.9744C50.9993 16.1674 51.0638 16.4329 51.0638 16.7707C51.0638 17.4142 50.9107 17.9129 50.6043 18.2668C49.9111 19.1194 49.1614 19.8192 48.3554 20.3661C47.5654 20.9131 46.6626 21.1866 45.6469 21.1866C44.8247 21.1866 44.204 20.9533 43.7848 20.4868C43.3656 20.0042 43.1561 19.3124 43.1561 18.4115C43.1561 17.9611 43.2689 17.1568 43.4946 15.9985C43.7042 14.985 43.809 14.2852 43.809 13.8992C43.809 13.6418 43.7203 13.5131 43.543 13.5131C43.3334 13.5131 43.0351 13.7865 42.6482 14.3335C42.2774 14.8644 41.8905 15.5722 41.4874 16.457C41.1005 17.3418 40.7861 18.2748 40.5443 19.2561C40.367 20.0122 40.1574 20.527 39.9156 20.8005C39.6899 21.0579 39.3271 21.1866 38.8273 21.1866Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
      <path
        d="M38.4023 15.6848C38.6118 15.6848 38.7731 15.7813 38.8859 15.9744C39.0149 16.1674 39.0794 16.4329 39.0794 16.7707C39.0794 17.4142 38.9262 17.9129 38.6199 18.2668C38.0234 18.9907 37.177 19.6583 36.0807 20.2696C35.0005 20.8809 33.8398 21.1866 32.5984 21.1866C30.9056 21.1866 29.5917 20.7281 28.6566 19.8111C27.7215 18.8942 27.254 17.6394 27.254 16.0468C27.254 14.9368 27.4878 13.9072 27.9553 12.9581C28.4228 11.9928 29.0677 11.2287 29.8899 10.6657C30.7283 10.1026 31.6714 9.82111 32.7193 9.82111C33.6544 9.82111 34.404 10.1026 34.9683 10.6657C35.5326 11.2126 35.8147 11.9607 35.8147 12.9098C35.8147 14.0198 35.4117 14.977 34.6056 15.7813C33.8156 16.5696 32.4694 17.197 30.567 17.6635C30.9701 18.4035 31.7359 18.7735 32.8644 18.7735C33.5899 18.7735 34.4121 18.5242 35.331 18.0255C36.2661 17.5107 37.0722 16.8431 37.7493 16.0226C37.9428 15.7974 38.1604 15.6848 38.4023 15.6848ZM32.3082 12.1859C31.7117 12.1859 31.2039 12.5318 30.7847 13.2235C30.3816 13.9152 30.1801 14.7518 30.1801 15.7331V15.7813C31.1313 15.5561 31.881 15.2183 32.4291 14.7678C32.9773 14.3174 33.2513 13.7946 33.2513 13.1994C33.2513 12.8937 33.1627 12.6524 32.9853 12.4755C32.8241 12.2824 32.5984 12.1859 32.3082 12.1859Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
      <path
        d="M28.7238 13.7302C28.7722 13.7141 28.8528 13.7061 28.9657 13.7061C29.2075 13.7061 29.3929 13.7865 29.5219 13.9474C29.6508 14.1083 29.7153 14.3254 29.7153 14.5989C29.7153 15.0976 29.6186 15.4918 29.4251 15.7813C29.2317 16.0548 28.9415 16.2559 28.5546 16.3846C27.813 16.6259 27.023 16.7465 26.1846 16.7465C25.4753 16.7465 24.8062 16.65 24.1775 16.457C23.7099 17.2131 23.194 17.9933 22.6298 18.7976C21.9849 19.7146 21.4287 20.342 20.9612 20.6798C20.4936 21.0176 19.9616 21.1865 19.3651 21.1865C18.7041 21.1865 18.1801 20.9292 17.7932 20.4144C17.4224 19.8996 17.1887 19.0872 17.0919 17.9772C16.8985 15.725 16.8017 13.7544 16.8017 12.0652V11.2207C16.8178 10.6898 16.9629 10.3198 17.237 10.1107C17.5111 9.90153 17.9222 9.79697 18.4703 9.79697C18.8895 9.79697 19.1958 9.89349 19.3893 10.0865C19.5989 10.2635 19.7037 10.5691 19.7037 11.0035C19.7037 12.8535 19.8165 15.2585 20.0422 18.2185C21.0095 16.7868 21.735 15.6446 22.2187 14.792C21.9768 14.3254 21.8559 13.7704 21.8559 13.127C21.8559 12.58 21.9768 12.0491 22.2187 11.5344C22.4605 11.0196 22.791 10.6013 23.2102 10.2796C23.6293 9.95784 24.1049 9.79697 24.6369 9.79697C25.1045 9.79697 25.4833 9.96588 25.7735 10.3037C26.0637 10.6254 26.2088 11.1 26.2088 11.7274C26.2088 12.4513 26.0154 13.2798 25.6284 14.2128C26.2411 14.1807 27.0552 14.06 28.0709 13.8509L28.7238 13.7302Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
      <path
        d="M17.5083 16.6742C17.7502 16.5776 17.9517 16.5294 18.1129 16.5294C18.3709 16.5294 18.5643 16.6259 18.6933 16.8189C18.8223 17.012 18.8868 17.2613 18.8868 17.567C18.8868 18.0496 18.7658 18.4598 18.524 18.7976C18.2983 19.1355 17.9033 19.4411 17.3391 19.7146C16.3879 20.165 15.1545 20.527 13.6391 20.8005C12.1236 21.0579 10.6324 21.1866 9.16527 21.1866C7.13392 21.1866 5.43306 20.9613 4.06271 20.5109C2.69235 20.0444 1.66861 19.4089 0.991494 18.6046C0.330498 17.8002 0 16.8913 0 15.8778C0 14.4944 0.443351 13.32 1.33005 12.3548C2.23288 11.3735 3.55487 10.6657 5.29603 10.2313C4.34484 9.95785 3.6113 9.47524 3.0954 8.7835C2.59562 8.09176 2.34573 7.31958 2.34573 6.46697C2.34573 5.30871 2.70847 4.28719 3.43395 3.4024C4.17556 2.50153 5.16705 1.80979 6.40844 1.32719C7.64982 0.844576 9.01212 0.603271 10.4953 0.603271C12.4944 0.603271 13.9938 1.03762 14.9933 1.90632C15.9929 2.75893 16.4927 3.86893 16.4927 5.23632C16.4927 6.18545 16.3153 6.95763 15.9606 7.55284C15.6221 8.13197 15.1304 8.42154 14.4855 8.42154C14.0341 8.42154 13.6794 8.32502 13.4214 8.13197C13.1635 7.92284 13.0345 7.61719 13.0345 7.21502C13.0345 6.94154 13.0748 6.64393 13.1554 6.32219C13.236 5.79132 13.2763 5.42936 13.2763 5.23632C13.2763 4.65719 13.0587 4.19067 12.6234 3.83675C12.1881 3.46675 11.4626 3.28175 10.447 3.28175C9.0766 3.28175 7.98032 3.57132 7.1581 4.15045C6.33589 4.72958 5.92478 5.5098 5.92478 6.4911C5.92478 7.24719 6.2311 7.87458 6.84373 8.37328C7.47248 8.85589 8.48816 9.12132 9.89076 9.16958C10.2454 9.18567 10.4953 9.2661 10.6404 9.41089C10.7855 9.55567 10.8581 9.79698 10.8581 10.1348C10.8581 11.1965 10.3744 11.7355 9.4071 11.7515C8.06899 11.7837 6.95658 11.9687 6.06988 12.3065C5.1993 12.6444 4.56248 13.0787 4.15944 13.6096C3.77251 14.1244 3.57905 14.6794 3.57905 15.2746C3.57905 16.272 4.04659 17.0281 4.98165 17.5429C5.91672 18.0415 7.39993 18.2909 9.43128 18.2909C10.7694 18.2909 12.1801 18.1381 13.6633 17.8324C15.1626 17.5107 16.4443 17.1246 17.5083 16.6742Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
    </svg>
  ),
  send: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgb(220,38,38)"
      className="h-8 w-8"
      {...props}
    >
      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
  ),
  threeDots: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(220,38,38)"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-7 w-7"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  ),
  // curveArrow: (props: IconProps) => (
  //   <svg
  //     width="186"
  //     height="141"
  //     viewBox="0 0 186 141"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     {...props}
  //   >
  //     <g clip-path="url(#clip0_3_273)">
  //       <path
  //         d="M88.566 112.265C85.5965 109.095 81.5665 105.715 78.8091 101.7C73.0822 93.2488 67.7795 84.586 62.4768 75.9232C52.5077 59.4427 42.5387 42.7509 31.7212 24.7914C45.7203 29.4397 56.1135 41.2719 72.6579 38.5251C71.1732 35.9897 70.749 33.8768 69.6885 33.4542C53.1441 26.693 38.7207 16.5511 25.1458 5.35286C13.9041 -3.73254 8.1772 -1.19707 6.69244 12.5367C5.20769 26.9043 2.23823 41.2719 0.117153 55.6395C-0.307062 57.9637 0.541343 60.4991 0.75345 63.4572C9.87408 59.2314 9.87407 59.2314 17.5099 27.7494C19.2068 30.4962 20.6916 32.6091 21.9642 34.7219C34.4786 56.4846 46.7808 78.2473 59.7194 99.7988C63.9616 106.771 69.0521 113.321 74.779 119.026C84.9602 129.168 96.2019 128.745 105.747 117.97C110.625 112.476 114.231 105.715 117.413 98.9536C121.019 91.3472 123.352 83.107 126.533 75.2893C128.867 69.7958 131.836 64.5136 134.593 58.8088C141.169 61.3443 143.714 66.2039 146.684 70.641C159.198 89.4456 168.531 109.518 175.53 131.069C176.379 133.605 176.803 136.352 178.288 138.676C179.136 139.944 181.469 141 183.166 141C184.015 141 185.711 138.676 185.923 137.408C186.136 133.816 185.923 129.802 185.075 126.421C179.136 102.123 169.167 79.5151 154.956 59.0201C152.198 54.7943 148.593 50.9911 144.775 47.8218C137.775 42.117 130.775 42.3283 125.049 49.3008C120.382 55.0056 116.988 61.7668 114.019 68.5281C109.565 78.4586 106.383 88.8118 101.929 98.7423C99.3835 104.025 96.414 109.518 88.566 112.265Z"
  //         fill="#0D1927"
  //       />
  //     </g>
  //     <defs>
  //       <clipPath id="clip0_3_273">
  //         <rect
  //           width="186"
  //           height="141"
  //           fill="white"
  //           transform="matrix(-1 0 0 1 186 0)"
  //         />
  //       </clipPath>
  //     </defs>
  //   </svg>
  // ),
  curveArrow: (props: IconProps) => (
    <svg
      width="196"
      height="181"
      viewBox="0 0 196 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M193.617 179.053C171.561 169.148 146.962 157.772 131.795 138.12C125.198 129.572 120.1 119.498 117.928 108.875C116.83 103.506 116.457 99.306 116.639 93.8085C116.745 90.628 116.731 80.9697 121.884 80.0752C124.466 79.627 128.15 82.6758 129.306 84.3419C134.841 92.3169 135.048 103.758 135.084 112.964C135.127 124.151 134.434 135.983 124.284 142.697C116.142 148.083 106.615 143.702 99.6615 138.453C89.4804 130.767 83.1844 119.54 78.5059 107.897C73.9667 96.6013 72.5504 84.9764 72.5504 72.8752C72.5504 63.0335 73.7003 53.2876 77.9726 44.2974C79.2768 41.5531 81.9078 37.3287 85.5948 37.6974C90.0474 38.1427 91.5125 46.386 92.1504 49.5419C96.193 69.5426 94.6613 90.1531 85.4837 108.431C82.2088 114.953 77.8204 121.017 71.5504 124.942C66.547 128.074 60.3893 127.016 55.1281 124.875C46.5407 121.381 39.9866 111.713 35.3948 104.12C29.7599 94.8018 26.7738 84.2111 24.7726 73.5863C21.3789 55.5693 21.0837 37.1393 18.5059 19.0085C18.4379 18.5301 16.6918 2.66697 13.8392 4.38633C10.5105 6.39268 8.78673 12.342 7.48369 15.653C5.72208 20.1292 4.1481 24.7347 2.99479 29.4086C2.64376 30.8312 2.24706 32.3094 2.03925 33.7641C1.78995 35.5092 2.79333 30.3197 3.21703 28.6086C5.23611 20.4546 6.71745 11.4469 10.417 3.853C12.4748 -0.370757 17.9913 3.6723 20.6392 5.67522C26.0625 9.77744 30.6243 14.6325 36.417 18.253"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  ),
}

export type IconType = keyof typeof Icons
