import { LateralMenu } from "../LateralMenu";
import { Container } from "./style";
import { Input } from "../Input";

const UserInformation = () => {
  return (
    <Container>
      <div className="logoContainer">
        <svg
          width="139"
          height="51"
          viewBox="0 0 139 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.7054 1.42721e-06H10.5528C9.76988 -2.22618e-05 9.00028 0.202714 8.31869 0.588506C7.6371 0.974299 7.06668 1.53005 6.6628 2.2018C6.25893 2.87356 6.03531 3.63851 6.01368 4.42237C5.99204 5.20623 6.17312 5.98236 6.53933 6.67544L10.9553 15.0518H2.94838C2.4401 15.051 1.94027 15.1821 1.49756 15.4322C1.05485 15.6823 0.684338 16.043 0.42209 16.4791C0.159841 16.9152 0.0148065 17.4119 0.00107475 17.9209C-0.012657 18.4298 0.105396 18.9336 0.343744 19.3832L14.5496 46.3132C14.7999 46.7871 15.1744 47.1836 15.6329 47.4602C16.0914 47.7367 16.6165 47.8829 17.1517 47.8829C17.6869 47.8829 18.212 47.7367 18.6705 47.4602C19.129 47.1836 19.5035 46.7871 19.7539 46.3132L23.6126 39.038L28.4526 48.2157C28.8381 48.947 29.4152 49.5592 30.1219 49.9865C30.8287 50.4139 31.6383 50.6403 32.4639 50.6413C33.2895 50.6423 34.0997 50.418 34.8075 49.9924C35.5153 49.5668 36.0939 48.956 36.4811 48.2257L58.6123 6.51217C58.9714 5.83693 59.1497 5.08006 59.13 4.31527C59.1103 3.55048 58.8931 2.80385 58.4997 2.14809C58.1063 1.49234 57.55 0.949826 56.8851 0.573381C56.2201 0.196936 55.4692 -0.000612638 54.7054 1.42721e-06ZM34.8728 17.8256L25.3307 35.8178C25.1641 36.1329 24.9148 36.3967 24.6098 36.5806C24.3047 36.7645 23.9554 36.8617 23.5993 36.8617C23.2432 36.8617 22.8939 36.7645 22.5888 36.5806C22.2838 36.3967 22.0345 36.1329 21.8678 35.8178L12.4173 17.9039C12.2591 17.6052 12.1806 17.2706 12.1895 16.9326C12.1984 16.5946 12.2944 16.2646 12.4681 15.9746C12.6417 15.6847 12.8873 15.4446 13.1809 15.2776C13.4744 15.1107 13.8061 15.0226 14.1437 15.0218H33.1912C33.5202 15.0218 33.8436 15.107 34.1299 15.2693C34.4162 15.4315 34.6558 15.6652 34.8252 15.9476C34.9947 16.23 35.0883 16.5515 35.0969 16.8809C35.1055 17.2103 35.0289 17.5363 34.8745 17.8273L34.8728 17.8256Z"
            fill="#F71963"
          />
          <path
            d="M101.669 19.3509H96.8456V35.9304C96.8451 36.0814 96.785 36.226 96.6785 36.3328C96.5719 36.4395 96.4275 36.4997 96.2768 36.5001H92.5527C92.402 36.4997 92.2575 36.4395 92.1509 36.3328C92.0443 36.226 91.9843 36.0814 91.9838 35.9304V19.3509H87.1255C87.0524 19.3538 86.9795 19.342 86.911 19.3162C86.8426 19.2904 86.7799 19.2511 86.7269 19.2006C86.6739 19.1501 86.6315 19.0895 86.6022 19.0223C86.573 18.9552 86.5575 18.8828 86.5566 18.8095V15.8774C86.5575 15.8042 86.573 15.7318 86.6022 15.6646C86.6315 15.5974 86.6739 15.5368 86.7269 15.4864C86.7799 15.4359 86.8426 15.3966 86.911 15.3708C86.9795 15.3449 87.0524 15.3331 87.1255 15.336H101.674C101.825 15.3292 101.972 15.3823 102.084 15.4837C102.196 15.5851 102.263 15.7266 102.271 15.8774V18.8112C102.262 18.9627 102.194 19.1045 102.081 19.2057C101.969 19.3069 101.82 19.3591 101.669 19.3509Z"
            fill="#F71963"
          />
          <path
            d="M117.173 36.3803C115.272 36.6513 113.353 36.7749 111.433 36.7501C107.765 36.7501 104.523 35.8105 104.523 30.6278V21.1685C104.523 15.9858 107.793 15.0745 111.461 15.0745C113.371 15.0492 115.281 15.1728 117.173 15.4443C117.57 15.501 117.741 15.6443 117.741 16.0141V18.6663C117.741 18.8173 117.681 18.9619 117.574 19.0687C117.468 19.1754 117.323 19.2356 117.173 19.236H111.185C109.854 19.236 109.365 19.6909 109.365 21.1736V23.7658H116.953C117.104 23.7662 117.248 23.8263 117.355 23.9331C117.461 24.0398 117.521 24.1845 117.522 24.3355V27.0343C117.521 27.1853 117.461 27.3299 117.355 27.4367C117.248 27.5435 117.104 27.6036 116.953 27.6041H109.365V30.6228C109.365 32.1038 109.848 32.5603 111.185 32.5603H117.173C117.323 32.5607 117.468 32.6209 117.574 32.7276C117.681 32.8344 117.741 32.9791 117.741 33.13V35.7789C117.741 36.152 117.57 36.3236 117.173 36.3803Z"
            fill="#F71963"
          />
          <path
            d="M138.626 36.4942H134.112C133.96 36.5059 133.808 36.4714 133.677 36.3953C133.545 36.3192 133.439 36.205 133.373 36.0677L129.455 29.8354L125.904 35.9311C125.704 36.2726 125.506 36.5008 125.195 36.5008H120.987C120.934 36.5079 120.881 36.5037 120.83 36.4884C120.779 36.4731 120.731 36.4471 120.691 36.4121C120.651 36.3771 120.618 36.334 120.596 36.2855C120.574 36.2371 120.562 36.1844 120.561 36.131C120.567 36.0612 120.586 35.9933 120.618 35.9311L126.772 25.6439L120.55 15.8748C120.519 15.8241 120.5 15.7672 120.493 15.7082C120.503 15.6037 120.553 15.507 120.632 15.4382C120.711 15.3693 120.814 15.3336 120.919 15.3384H125.496C125.809 15.3384 126.037 15.6233 126.205 15.8798L129.842 21.6323L133.363 15.8798C133.426 15.737 133.524 15.6124 133.648 15.5178C133.772 15.4231 133.918 15.3614 134.072 15.3384H138.28C138.348 15.324 138.42 15.3303 138.485 15.3565C138.55 15.3826 138.606 15.4275 138.645 15.4855C138.685 15.5434 138.706 15.6119 138.707 15.682C138.708 15.7522 138.688 15.8211 138.649 15.8798L132.457 25.7089L138.915 35.9361C138.966 36.0229 138.995 36.1206 139 36.221C138.995 36.3809 138.854 36.4942 138.626 36.4942Z"
            fill="#F71963"
          />
          <path
            d="M79.7349 15.3913C79.6335 15.3917 79.5353 15.4272 79.4571 15.4919C79.3788 15.5566 79.3254 15.6464 79.3058 15.7461L75.1793 31.0461C75.1227 31.3593 75.0379 31.4726 74.7817 31.4726C74.5256 31.4726 74.4407 31.3543 74.3842 31.0461L70.2528 15.7428C70.2332 15.6431 70.1796 15.5533 70.1014 15.4886C70.0232 15.4239 69.9251 15.3883 69.8236 15.3879H65.762C65.6958 15.388 65.6305 15.4029 65.571 15.4318C65.5115 15.4606 65.4592 15.5025 65.4181 15.5544C65.377 15.6063 65.3481 15.6668 65.3337 15.7315C65.3192 15.7961 65.3194 15.8632 65.3345 15.9277C65.3345 15.9277 70.3758 33.4751 70.4307 33.6467C70.7005 34.5848 71.2819 35.4026 72.0789 35.9645C72.8759 36.5265 73.8407 36.7991 74.8134 36.737C75.7801 36.7752 76.7326 36.494 77.5242 35.9368C78.3158 35.3796 78.9026 34.5773 79.1943 33.6533C79.2742 33.4168 84.2041 15.9277 84.2041 15.9277C84.2188 15.8633 84.2189 15.7964 84.2043 15.732C84.1897 15.6676 84.1607 15.6073 84.1196 15.5556C84.0786 15.5039 84.0264 15.4621 83.967 15.4334C83.9076 15.4047 83.8426 15.3897 83.7766 15.3896L79.7349 15.3913Z"
            fill="#F71963"
          />
          <path
            d="M54.7054 1.42721e-06H10.5528C9.76988 -2.22618e-05 9.00028 0.202714 8.31869 0.588506C7.6371 0.974299 7.06668 1.53005 6.6628 2.2018C6.25893 2.87356 6.03531 3.63851 6.01368 4.42237C5.99204 5.20623 6.17312 5.98236 6.53933 6.67544L10.9553 15.0518H2.94838C2.4401 15.051 1.94027 15.1821 1.49756 15.4322C1.05485 15.6823 0.684338 16.043 0.42209 16.4791C0.159841 16.9152 0.0148065 17.4119 0.00107475 17.9209C-0.012657 18.4298 0.105396 18.9336 0.343744 19.3832L14.5496 46.3132C14.7999 46.7871 15.1744 47.1836 15.6329 47.4602C16.0914 47.7367 16.6165 47.8829 17.1517 47.8829C17.6869 47.8829 18.212 47.7367 18.6705 47.4602C19.129 47.1836 19.5035 46.7871 19.7539 46.3132L23.6126 39.038L28.4526 48.2157C28.8381 48.947 29.4152 49.5592 30.1219 49.9865C30.8287 50.4139 31.6383 50.6403 32.4639 50.6413C33.2895 50.6423 34.0997 50.418 34.8075 49.9924C35.5153 49.5668 36.0939 48.956 36.4811 48.2257L58.6123 6.51217C58.9714 5.83693 59.1497 5.08006 59.13 4.31527C59.1103 3.55048 58.8931 2.80385 58.4997 2.14809C58.1063 1.49234 57.55 0.949826 56.8851 0.573381C56.2201 0.196936 55.4692 -0.000612638 54.7054 1.42721e-06ZM34.8728 17.8256L25.3307 35.8178C25.1641 36.1329 24.9148 36.3967 24.6098 36.5806C24.3047 36.7645 23.9554 36.8617 23.5993 36.8617C23.2432 36.8617 22.8939 36.7645 22.5888 36.5806C22.2838 36.3967 22.0345 36.1329 21.8678 35.8178L12.4173 17.9039C12.2591 17.6052 12.1806 17.2706 12.1895 16.9326C12.1984 16.5946 12.2944 16.2646 12.4681 15.9746C12.6417 15.6847 12.8873 15.4446 13.1809 15.2776C13.4744 15.1107 13.8061 15.0226 14.1437 15.0218H33.1912C33.5202 15.0218 33.8436 15.107 34.1299 15.2693C34.4162 15.4315 34.6558 15.6652 34.8252 15.9476C34.9947 16.23 35.0883 16.5515 35.0969 16.8809C35.1055 17.2103 35.0289 17.5363 34.8745 17.8273L34.8728 17.8256Z"
            fill="#F71963"
          />
        </svg>
        <LateralMenu />
      </div>

      <div className="divInput">
        <Input />
        <div>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8897 0.899589V0.900007H21.8537H21.8178H21.7818H21.7459H21.71H21.674H21.6381H21.6021H21.5662H21.5303H21.4943H21.4584H21.4224H21.3865H21.3505H21.3146H21.2787H21.2427H21.2068H21.1708H21.1349H21.0989H21.063H21.027H20.9911H20.9551H20.9192H20.8833H20.8473H20.8114H20.7754H20.7395H20.7035H20.6676H20.6316H20.5957H20.5597H20.5238H20.4878H20.4519H20.4159H20.38H20.344H20.3081H20.2721H20.2362H20.2002H20.1643H20.1283H20.0923H20.0564H20.0204H19.9845H19.9485H19.9126H19.8766H19.8407H19.8047H19.7688H19.7328H19.6968H19.6609H19.6249H19.589H19.553H19.5171H19.4811H19.4452H19.4092H19.3732H19.3373H19.3013H19.2654H19.2294H19.1934H19.1575H19.1215H19.0856H19.0496H19.0136H18.9777H18.9417H18.9058H18.8698H18.8338H18.7979H18.7619H18.7259H18.69H18.654H18.6181H18.5821H18.5461H18.5102H18.4742H18.4382H18.4023H18.3663H18.3303H18.2944H18.2584H18.2225H18.1865H18.1505H18.1146H18.0786H18.0426H18.0067H17.9707H17.9347H17.8988H17.8628H17.8268H17.7909H17.7549H17.7189H17.6829H17.647H17.611H17.575H17.5391H17.5031H17.4671H17.4312H17.3952H17.3592H17.3233H17.2873H17.2513H17.2153H17.1794H17.1434H17.1074H17.0715H17.0355H16.9995H16.9635H16.9276H16.8916H16.8556H16.8196H16.7837H16.7477H16.7117H16.6758H16.6398H16.6038H16.5678H16.5319H16.4959H16.4599H16.4239H16.388H16.352H16.316H16.28H16.2441H16.2081H16.1721H16.1361H16.1002H16.0642H16.0282H15.9922H15.9562H15.9203H15.8843H15.8483H15.8123H15.7764H15.7404H15.7044H15.6684H15.6325H15.5965H15.5605H15.5245H15.4885H15.4526H15.4166H15.3806H15.3446H15.3086H15.2727H15.2367H15.2007H15.1647H15.1287H15.0928H15.0568H15.0208H14.9848H14.9488H14.9129H14.8769H14.8409H14.8049H14.7689H14.733H14.697H14.661H14.625H14.589H14.5531H14.5171H14.4811H14.4451H14.4091H14.3731H14.3372H14.3012H14.2652H14.2292H14.1932H14.1572H14.1213H14.0853H14.0493H14.0133H13.9773H13.9413H13.9054H13.8694H13.8334H13.7974H13.7614H13.7254H13.6895H13.6535H13.6175H13.5815H13.5455H13.5095H13.4736H13.4376H13.4016H13.3656H13.3296H13.2936H13.2576H13.2217H13.1857H13.1497H13.1137H13.0777H13.0417H13.0058H12.9698H12.9338H12.8978H12.8618H12.8258H12.7898H12.7539H12.7179H12.6819H12.6459H12.6099H12.5739H12.5379H12.5019H12.466H12.43H12.394H12.358H12.322H12.286H12.25H12.2141H12.1781H12.1421H12.1061H12.0701H12.0341H11.9981H11.9622H11.9262H11.8902H11.8542H11.8182H11.7822H11.7462H11.7102H11.6743H11.6383H11.6023H11.5663H11.5303H11.4943H11.4583H11.4223H11.3864H11.3504H11.3144H11.2784H11.2424H11.2064H11.1704H11.1344H11.0985H11.0625H11.0265H10.9905H10.9545H10.9185H10.8825H10.8465H10.8106H10.7746H10.7386H10.7026H10.6666H10.6306H10.5946H10.5587H10.5227H10.4867H10.4507H10.4147H10.3787H10.3427H10.3067H10.2708H10.2348H10.1988H10.1628H10.1268H10.0908H10.0548H10.0188H9.98286H9.94687H9.91088H9.87489H9.83891H9.80292H9.76693H9.73095H9.69496H9.65897H9.62299H9.587H9.55101H9.51503H9.47904H9.44305H9.40707H9.37108H9.33509H9.29911H9.26312H9.22713H9.19115H9.15516H9.11917H9.08319H9.0472H9.01122H8.97523H8.93924H8.90326H8.86727H8.83129H8.7953H8.75931H8.72333H8.68734H8.65136H8.61537H8.57939H8.5434H8.50742H8.47143H8.43545H8.39946H8.36348H8.32749H8.29151H8.25552H8.21954H8.18355H8.14757H8.11158H8.0756H8.03961H8.00363H7.96764H7.93166H7.89568H7.85969H7.82371H7.78773H7.75174H7.71576H7.67977H7.64379H7.60781H7.57182H7.53584H7.49986H7.46387H7.42789H7.39191H7.35593H7.31994H7.28396H7.24798H7.212H7.17601H7.14003H7.10405H7.06807H7.03209H6.9961H6.96012H6.92414H6.88816H6.85218H6.8162H6.78022H6.74424H6.70825H6.67227H6.63629H6.60031H6.56433H6.52835H6.49237H6.45639H6.42041H6.38443H6.34845H6.31247H6.27649H6.24051H6.20454H6.16856H6.13258H6.0966H6.06062H6.02464H5.98866H5.95269H5.91671H5.88073H5.84475H5.80877H5.7728H5.73682H5.70084H5.66487H5.62889H5.59291H5.55694H5.52096H5.48498H5.44901H5.41303H5.37705H5.34108H5.3051H5.26913H5.23315H5.19718H5.1612H5.12523H5.08925H5.05328H5.01731H4.98133H4.94536H4.90938H4.87341H4.83744H4.80146H4.76549H4.72952H4.69354H4.65757H4.6216H4.58563H4.54966H4.51368H4.47771H4.44174H4.40577H4.3698H4.33383H4.29786H4.26189H4.22592H4.18995H4.15398H4.11801H4.08204H4.04607H4.0101H3.97413H3.93816H3.90219H3.86622H3.83025H3.79429H3.75832H3.72235H3.68638H3.65042H3.61445H3.57848H3.54251H3.50655H3.4708H3.47058V1.00001C3.16315 0.998594 2.86844 1.222 2.78676 1.51839L21.8897 0.899589ZM21.8897 0.899589L21.8988 0.900422C22.1984 0.927832 22.4718 1.13541 22.5787 1.41668L22.5787 1.41668L22.5791 1.41769L25.0496 8.13431C25.0496 8.13436 25.0496 8.13441 25.0496 8.13445C25.0824 8.22288 25.0995 8.31701 25.0999 8.41132V8.41175V12.2934C25.1056 12.7218 24.7226 13.11 24.2941 13.11C23.8656 13.11 23.4826 12.7218 23.4882 12.2934V9.21763M21.8897 0.899589L23.4882 9.21763M23.4882 9.21763H2.51176V23.4882H23.4882V16.6294H14.8647V18.2941L14.8647 18.2944C14.8636 18.5903 14.6706 18.8347 14.4308 18.9668C14.1911 19.0989 13.8814 19.1315 13.6307 18.9744L13.6301 18.974L9.74776 16.5035C9.51297 16.354 9.40244 16.0834 9.40244 15.8235C9.40244 15.5636 9.51297 15.293 9.74776 15.1435L13.6289 12.6737C13.6291 12.6736 13.6293 12.6735 13.6295 12.6733C13.7878 12.5697 13.9826 12.5245 14.1704 12.5478L14.1704 12.5478L14.1721 12.548C14.557 12.6027 14.8682 12.9647 14.8647 13.3534M23.4882 9.21763L0.899998 8.41194M14.8647 13.3534V13.3529H14.7647L14.8647 13.3539C14.8647 13.3537 14.8647 13.3536 14.8647 13.3534ZM14.8647 13.3534V15.0176M14.8647 15.0176H24.2941C24.7189 15.0177 25.0999 15.3987 25.0999 15.8235V24.2941C25.0999 24.7189 24.7189 25.0999 24.2941 25.0999H1.70588C1.28106 25.0999 0.900042 24.7189 0.899998 24.2941V8.41194M14.8647 15.0176V15.1176L14.7647 15.0176H14.8647ZM0.899998 8.41194V8.41175H0.999998L0.899998 8.41194ZM23.1359 7.60587L21.2574 2.51177H14.1588V7.60587H23.1359ZM12.547 2.51177H4.08816L2.75096 7.60587H12.547V2.51177ZM13.2529 16.8321V14.8149L11.6747 15.8235L13.2529 16.8321Z"
              fill="#9F9F9F"
              stroke="#9F9F9F"
              stroke-width="0.2"
            />
          </svg>

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 27C16 27 3.5 20 3.5 11.5C3.50025 9.99768 4.02082 8.5418 4.97318 7.37991C5.92555 6.21801 7.25093 5.42181 8.72399 5.12669C10.197 4.83156 11.7269 5.05572 13.0533 5.76105C14.3798 6.46638 15.421 7.60935 16 8.99564L16 8.99565C16.579 7.60936 17.6202 6.46639 18.9467 5.76106C20.2731 5.05572 21.8029 4.83156 23.276 5.12669C24.7491 5.42181 26.0745 6.21801 27.0268 7.3799C27.9792 8.5418 28.4997 9.99768 28.5 11.5C28.5 20 16 27 16 27Z"
              stroke="#9F9F9F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              stroke="#9F9F9F"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z"
              stroke="#9F9F9F"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M7.97485 24.9218C8.72812 23.4408 9.8765 22.1971 11.2929 21.3284C12.7093 20.4598 14.3384 20 16 20C17.6615 20 19.2906 20.4598 20.707 21.3284C22.1234 22.1971 23.2718 23.4407 24.0251 24.9217"
              stroke="#9F9F9F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 23H8.72727L5.2402 3.82112C5.19831 3.5907 5.07688 3.3823 4.89708 3.23225C4.71728 3.08219 4.49052 3 4.25633 3H2"
              stroke="#9F9F9F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 28C11.3807 28 12.5 26.8807 12.5 25.5C12.5 24.1193 11.3807 23 10 23C8.61929 23 7.5 24.1193 7.5 25.5C7.5 26.8807 8.61929 28 10 28Z"
              stroke="#9F9F9F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23 28C24.3807 28 25.5 26.8807 25.5 25.5C25.5 24.1193 24.3807 23 23 23C21.6193 23 20.5 24.1193 20.5 25.5C20.5 26.8807 21.6193 28 23 28Z"
              stroke="#9F9F9F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.81818 18H23.5127C23.981 18 24.4346 17.8356 24.7942 17.5355C25.1538 17.2354 25.3966 16.8186 25.4804 16.3578L27 8H6"
              stroke="#9F9F9F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export { UserInformation };
