interface LogoProps {
  variant?: 'light' | 'dark';
}

const LogoLight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 135 41"
    className="h-9 w-auto fill-slate-700 dark:fill-sky-100"
  >
    <path
      d="M23.172 29.3878C24.6852 29.6276 26.1187 30.187 27.4726 31.066C28.8265 31.985 29.5034 33.2836 29.5034 34.9617C29.3441 36.7997 28.5676 38.0983 27.1739 38.8574C25.7802 39.6565 24.1875 40.0961 22.3956 40.176C20.6037 40.2559 19.0308 40.136 17.6769 39.8164C12.0623 38.7775 7.56261 35.9606 4.17792 31.3657C1.3507 26.8107 0.1561 21.8961 0.59412 16.6219C1.03214 11.3077 2.92359 6.6129 6.26847 2.53738C6.90558 1.6983 7.76171 0.91916 8.83685 0.199951H10.2704C10.8279 0.319819 11.4052 0.539577 12.0025 0.859226C12.6397 1.13892 12.9582 1.45857 12.9582 1.81817C12.998 2.13782 12.9184 2.41751 12.7193 2.65725C9.17532 6.01356 6.88567 10.0691 5.85036 14.8239C4.89468 19.5786 5.27297 24.2335 6.98522 28.7885C8.21964 32.4245 10.5093 35.1215 13.8542 36.8796C15.3673 37.5589 17.0796 37.8585 18.9909 37.7786C20.9023 37.6987 22.4752 37.0194 23.7096 35.7409C24.2671 35.1016 24.6056 34.3624 24.725 33.5233C24.7648 33.0838 24.725 32.6443 24.6056 32.2047C24.6056 32.2047 24.6056 32.1648 24.6056 32.0849C24.4861 31.8052 24.2273 31.6254 23.8291 31.5455C23.5503 31.5455 23.2716 31.5654 22.9929 31.6054C22.515 31.6454 22.1367 31.8252 21.858 32.1448C21.5792 32.5044 21.5195 32.924 21.6788 33.4034C21.7584 33.6032 21.7186 33.7431 21.5593 33.823C21.4001 33.9029 21.181 33.9229 20.9023 33.8829C20.6236 33.8829 20.3647 33.8629 20.1258 33.823C19.8869 33.783 19.7276 33.7431 19.648 33.7031C19.1701 33.5832 18.6525 33.3834 18.095 33.1038C17.5375 32.864 17.1393 32.5044 16.9004 32.0249C16.7013 31.3457 16.7809 30.7463 17.1393 30.2269C17.4977 29.7474 17.9954 29.4278 18.6326 29.268C20.1457 28.9883 21.6589 29.0282 23.172 29.3878Z"
      fill="black"
    />
    <path
      d="M26.0129 23.0348V6.91257C23.0663 9.23002 21.1748 10.8083 20.3386 11.6474C18.6662 13.3255 17.8299 15.0436 17.8299 16.8017C17.8299 18.7595 18.6861 20.3578 20.3983 21.5964C22.031 22.5554 23.8228 23.0348 25.774 23.0348H26.0129ZM24.8781 2.53738H13.171C12.6533 2.53738 12.0959 2.41751 11.4986 2.17777C10.2243 1.6983 9.58721 1.1589 9.58721 0.559555C9.58721 0.319819 9.84604 0.199951 10.3637 0.199951H39.0938C39.6115 0.199951 40.1689 0.319819 40.7662 0.559555C42.0405 1.11894 42.6776 1.65835 42.6776 2.17777C42.6776 2.41751 42.4188 2.53738 41.9011 2.53738H31.4484C32.1253 2.77712 32.7823 3.05681 33.4195 3.37646C37.72 5.3343 39.8703 7.55186 39.8703 10.0291C39.8703 10.9881 39.6314 11.8871 39.1535 12.7262C39.7508 13.0858 40.0495 13.4054 40.0495 13.6851C40.0495 13.765 39.9898 13.8449 39.8703 13.9249C39.5119 14.1246 39.2332 14.4043 39.0341 14.7639C38.3173 15.603 37.4413 16.0225 36.406 16.0225C35.8883 16.0225 35.0322 15.7828 33.8376 15.3033C32.8421 14.9038 32.3443 14.5242 32.3443 14.1646L32.4041 13.9848C34.3951 11.9071 35.3905 10.129 35.3905 8.65065C35.3905 8.09127 35.2711 7.55186 35.0322 7.03243C34.7933 6.47305 34.4349 6.03353 33.957 5.71389C33.519 5.35428 33.0611 5.05461 32.5832 4.81487L32.4638 4.75494C31.8267 4.39534 31.1895 4.1556 30.5524 4.03573V24.9527C30.5524 25.1925 30.2737 25.3123 29.7162 25.3123H29.4773C25.8537 25.3123 22.4092 24.4932 19.144 22.855C15.5204 21.057 13.5692 18.6197 13.2905 15.5431C13.2905 13.9448 13.7683 12.5264 14.724 11.2878C15.9982 9.56964 18.4073 7.39204 21.9513 4.75494C22.9468 4.03573 23.9224 3.29654 24.8781 2.53738Z"
      fill="black"
    />
    <path
      d="M51.6026 1.45857C52.1999 2.17778 52.0605 2.53738 51.1845 2.53738H47.302V30.9461C47.302 31.106 47.0631 31.1659 46.5852 31.1259C46.1472 31.1259 45.6296 31.026 45.0323 30.8263C44.4748 30.6664 43.9571 30.4467 43.4793 30.167C43.0413 29.8873 42.8223 29.5477 42.8223 29.1481V2.53738H42.7028C41.6675 2.53738 40.8512 2.41751 40.2539 2.17777C39.6566 1.93804 39.1588 1.63837 38.7606 1.27876C38.1633 0.559556 38.3027 0.199951 39.1787 0.199951H48.4369C48.9545 0.199951 49.512 0.319819 50.1093 0.559555C50.7066 0.799291 51.2044 1.09896 51.6026 1.45857Z"
      fill="black"
    />
    <path
      d="M50.2092 2.53738C49.6915 2.53738 49.134 2.41751 48.5367 2.17777C47.9394 1.93804 47.4417 1.61839 47.0435 1.21883C46.4462 0.539577 46.5856 0.199951 47.4616 0.199951H76.6098C77.1275 0.199951 77.665 0.319819 78.2225 0.559555C78.8198 0.799291 79.3176 1.09896 79.7158 1.45857C80.3131 2.17778 80.1737 2.53738 79.2977 2.53738H50.2092ZM76.3709 14.0447C76.8886 17.0015 76.132 19.5587 74.1012 21.7163C71.9111 23.6342 69.3427 24.5132 66.396 24.3534C63.2104 24.1936 60.1243 23.4544 57.1379 22.1358C54.8283 21.2568 52.5586 20.2579 50.3286 19.1391C50.2092 19.0992 50.0101 18.9993 49.7313 18.8394C49.4526 18.6397 49.2336 18.4399 49.0743 18.2401C48.915 18.0004 48.9349 17.8006 49.134 17.6408C49.3331 17.441 49.6318 17.3811 50.03 17.461C50.468 17.5009 50.8662 17.6008 51.2246 17.7606C51.6228 17.9205 51.9214 18.0603 52.1205 18.1802C54.1514 19.219 56.2618 20.138 58.4519 20.9371C59.8456 21.4566 61.299 21.7962 62.8122 21.956C64.3652 22.1158 65.8584 21.8961 67.2919 21.2967C69.721 20.138 71.1744 18.4199 71.6522 16.1424C72.1699 13.825 71.8115 11.6074 70.5771 9.48973L70.4576 9.72947C70.2187 10.2089 69.9599 10.6684 69.6811 11.108C69.482 11.4676 69.3028 11.8272 69.1436 12.1868C68.825 12.906 68.4467 13.6252 68.0087 14.3444C66.615 16.1025 64.8032 17.0614 62.5733 17.2212C62.2149 17.2612 61.6972 17.2012 61.0203 17.0414C60.3832 16.8816 59.766 16.6419 59.1687 16.3222C58.5714 16.0026 58.2727 15.643 58.2727 15.2434V0.679423C58.2727 0.519598 58.5116 0.459664 58.9895 0.499621C59.4673 0.499621 60.0049 0.599511 60.6022 0.799291C61.1995 0.959116 61.7171 1.17887 62.1552 1.45857C62.5932 1.73826 62.8122 2.07788 62.8122 2.47744V13.1457C63.2502 12.7062 63.6285 12.2067 63.9471 11.6474C64.1063 11.3677 64.2457 11.108 64.3652 10.8682C65.281 9.19006 66.177 7.51191 67.053 5.83375L67.1725 5.71389C67.2123 5.55406 67.3716 5.45417 67.6503 5.41421C68.1282 5.29435 68.6657 5.35428 69.263 5.59402C69.9002 5.83375 70.4178 6.09347 70.816 6.37316C73.6831 8.21114 75.5347 10.7683 76.3709 14.0447Z"
      fill="black"
    />
    <path
      d="M88.2922 1.45857C88.8895 2.17778 88.7501 2.53738 87.874 2.53738H83.9916V30.9461C83.9916 31.106 83.7527 31.1659 83.2748 31.1259C82.8368 31.1259 82.3192 31.026 81.7219 30.8263C81.1644 30.6664 80.6467 30.4467 80.1689 30.167C79.7309 29.8873 79.5118 29.5477 79.5118 29.1481V2.53738H79.3924C78.3571 2.53738 77.5408 2.41751 76.9435 2.17777C76.3462 1.93804 75.8484 1.63837 75.4502 1.27876C74.8529 0.559556 74.9923 0.199951 75.8683 0.199951H85.1265C85.6441 0.199951 86.2016 0.319819 86.7989 0.559555C87.3962 0.799291 87.894 1.09896 88.2922 1.45857Z"
      fill="black"
    />
    <path
      d="M112.702 2.53738H86.9585C86.4807 2.53738 85.9232 2.39753 85.2861 2.11784C84.0118 1.59841 83.3747 1.07898 83.3747 0.559555C83.3747 0.319819 83.6335 0.199951 84.1512 0.199951H109.835C110.353 0.199951 110.93 0.319819 111.567 0.559555C112.841 1.07898 113.479 1.61839 113.479 2.17777C113.479 2.41751 113.22 2.53738 112.702 2.53738ZM109.716 25.612C109.158 25.612 108.581 25.5121 107.983 25.3123C106.47 24.8728 105.714 24.2934 105.714 23.5742V20.4577C105.554 17.3811 104.639 14.5841 102.966 12.0669C102.847 12.866 102.289 15.2634 101.294 19.259V19.4987C101.294 20.6175 100.935 21.1769 100.219 21.1769C100.019 21.1769 99.6611 21.1369 99.1434 21.057C98.6656 20.9771 98.0882 20.7374 97.4112 20.3378C96.7343 19.9382 96.3958 19.5187 96.3958 19.0792L96.6945 17.7007C96.5352 16.6618 96.0375 15.5231 95.2012 14.2845C94.2854 12.7661 93.6682 11.7872 93.3496 11.3477C93.3496 13.785 92.812 16.6419 91.7369 19.9183C91.6174 20.118 91.3785 20.2179 91.0201 20.2179C90.4627 20.2179 89.8454 20.0781 89.1685 19.7984C87.8544 19.3189 87.1974 18.7995 87.1974 18.2401L87.6753 16.3822C87.7151 16.1025 87.735 15.7828 87.735 15.4232C87.735 15.0636 87.6753 14.7639 87.5558 14.5242C87.4762 14.2445 87.3567 14.0247 87.1974 13.8649C87.0779 13.7051 86.9585 13.5652 86.839 13.4454C86.7594 13.2856 86.7196 13.1657 86.7196 13.0858C86.7196 12.8061 86.9585 12.6662 87.4363 12.6662C87.7549 12.6662 88.0934 12.7262 88.4517 12.846L88.5115 12.6063C88.7504 11.1279 88.8699 9.68951 88.8699 8.29105L88.8101 7.3321H88.7504C88.392 6.9725 88.2128 6.71279 88.2128 6.55296C88.2128 6.31323 88.4916 6.17338 89.049 6.13342C90.8409 6.17338 92.4138 6.75274 93.7677 7.87151C95.1614 8.95033 96.575 10.6085 98.0085 12.846C98.4067 11.5275 98.6058 10.189 98.6058 8.83046C98.6058 8.1512 98.5461 7.45197 98.4266 6.73276V6.6129C98.4266 6.45307 98.5063 6.35318 98.6656 6.31323C98.8249 6.23331 99.0239 6.19336 99.2629 6.19336L99.7407 6.25329C101.533 6.6129 103.524 8.11125 105.714 10.7483V1.03903C105.714 0.879203 105.873 0.799291 106.192 0.799291C106.63 0.799291 107.227 0.899181 107.983 1.09896C109.457 1.49852 110.193 2.05791 110.193 2.77712V25.3723C110.193 25.5321 110.034 25.612 109.716 25.612Z"
      fill="black"
    />
    <path
      d="M112.193 2.53738C111.675 2.53738 111.257 2.43749 110.939 2.23771C110.62 1.99797 110.282 1.67832 109.923 1.27876C109.326 0.559556 109.465 0.199951 110.341 0.199951H131.187C131.506 0.199951 131.964 0.319819 132.561 0.559555C133.198 0.799291 133.716 1.09896 134.114 1.45857C134.711 2.17778 134.572 2.53738 133.696 2.53738H112.193ZM126.707 23.1547V2.53738H118.106C119.221 3.21663 120.296 3.95582 121.332 4.75494C122.526 5.55406 123.482 6.53298 124.199 7.69171C124.517 8.37096 124.597 9.01026 124.438 9.6096C124.239 10.2089 123.88 10.7683 123.363 11.2878C122.367 12.4465 121.272 13.5053 120.077 14.4643C119.958 14.5841 119.819 14.684 119.659 14.7639C119.181 15.1635 118.743 15.603 118.345 16.0825C117.907 16.562 117.768 17.1213 117.927 17.7606C118.086 18.32 118.405 18.7995 118.883 19.1991C119.361 19.6386 119.838 20.0182 120.316 20.3378C120.356 20.3778 120.416 20.4177 120.495 20.4577C122.367 21.7762 124.438 22.6752 126.707 23.1547ZM123.124 25.5521C123.323 25.632 123.402 25.7518 123.363 25.9117C123.283 26.0715 123.143 26.2513 122.944 26.4511C122.745 26.6109 122.546 26.7507 122.347 26.8706C122.188 26.9905 122.068 27.0704 121.989 27.1103C121.591 27.3501 121.093 27.5898 120.495 27.8296C119.938 28.0693 119.46 28.0893 119.062 27.8895C117.708 27.1703 116.275 26.7907 114.761 26.7507C114.443 26.7108 114.284 26.6109 114.284 26.4511C114.323 26.2513 114.423 26.0515 114.582 25.8517C114.781 25.612 114.96 25.4522 115.12 25.3723C116.036 24.6131 117.091 24.2135 118.285 24.1736C119.998 24.2135 121.61 24.673 123.124 25.5521ZM134.114 1.45857C134.751 2.17778 134.612 2.53738 133.696 2.53738H131.247V25.4322C131.127 25.632 130.869 25.7119 130.47 25.6719C126.847 25.2324 123.422 24.1336 120.197 22.3756C118.644 21.5365 117.19 20.5576 115.837 19.4388C115.279 18.9993 114.741 18.4998 114.224 17.9404C113.706 17.3811 113.388 16.7418 113.268 16.0225C113.228 15.3033 113.427 14.684 113.865 14.1646C114.303 13.6452 114.801 13.1857 115.359 12.7861C115.359 12.7461 115.379 12.7262 115.418 12.7262C116.852 11.6474 118.146 10.3688 119.301 8.89039C120.217 7.49193 119.998 6.27327 118.644 5.23441C117.409 4.27547 116.115 3.37646 114.761 2.53738H112.193C111.675 2.53738 111.257 2.43749 110.939 2.23771C110.62 1.99797 110.282 1.67832 109.923 1.27876C109.326 0.559556 109.465 0.199951 110.341 0.199951H130.888C131.406 0.199951 131.984 0.319819 132.621 0.559555C133.218 0.799291 133.716 1.09896 134.114 1.45857Z"
      fill="black"
    />
    <path
      d="M23.172 29.3878C24.6852 29.6276 26.1187 30.187 27.4726 31.066C28.8265 31.985 29.5034 33.2836 29.5034 34.9617C29.3441 36.7997 28.5676 38.0983 27.1739 38.8574C25.7802 39.6565 24.1875 40.0961 22.3956 40.176C20.6037 40.2559 19.0308 40.136 17.6769 39.8164C12.0623 38.7775 7.56261 35.9606 4.17792 31.3657C1.3507 26.8107 0.1561 21.8961 0.59412 16.6219C1.03214 11.3077 2.92359 6.6129 6.26847 2.53738C6.90558 1.6983 7.76171 0.91916 8.83685 0.199951H10.2704C10.8279 0.319819 11.4052 0.539577 12.0025 0.859226C12.6397 1.13892 12.9582 1.45857 12.9582 1.81817C12.998 2.13782 12.9184 2.41751 12.7193 2.65725C9.17532 6.01356 6.88567 10.0691 5.85036 14.8239C4.89468 19.5786 5.27297 24.2335 6.98522 28.7885C8.21964 32.4245 10.5093 35.1215 13.8542 36.8796C15.3673 37.5589 17.0796 37.8585 18.9909 37.7786C20.9023 37.6987 22.4752 37.0194 23.7096 35.7409C24.2671 35.1016 24.6056 34.3624 24.725 33.5233C24.7648 33.0838 24.725 32.6443 24.6056 32.2047C24.6056 32.2047 24.6056 32.1648 24.6056 32.0849C24.4861 31.8052 24.2273 31.6254 23.8291 31.5455C23.5503 31.5455 23.2716 31.5654 22.9929 31.6054C22.515 31.6454 22.1367 31.8252 21.858 32.1448C21.5792 32.5044 21.5195 32.924 21.6788 33.4034C21.7584 33.6032 21.7186 33.7431 21.5593 33.823C21.4001 33.9029 21.181 33.9229 20.9023 33.8829C20.6236 33.8829 20.3647 33.8629 20.1258 33.823C19.8869 33.783 19.7276 33.7431 19.648 33.7031C19.1701 33.5832 18.6525 33.3834 18.095 33.1038C17.5375 32.864 17.1393 32.5044 16.9004 32.0249C16.7013 31.3457 16.7809 30.7463 17.1393 30.2269C17.4977 29.7474 17.9954 29.4278 18.6326 29.268C20.1457 28.9883 21.6589 29.0282 23.172 29.3878Z"
      fill="#5628EE"
    />
    <path
      d="M26.0129 23.0348V6.91257C23.0663 9.23002 21.1748 10.8083 20.3386 11.6474C18.6662 13.3255 17.8299 15.0436 17.8299 16.8017C17.8299 18.7595 18.6861 20.3578 20.3983 21.5964C22.031 22.5554 23.8228 23.0348 25.774 23.0348H26.0129ZM24.8781 2.53738H13.171C12.6533 2.53738 12.0959 2.41751 11.4986 2.17777C10.2243 1.6983 9.58721 1.1589 9.58721 0.559555C9.58721 0.319819 9.84604 0.199951 10.3637 0.199951H39.0938C39.6115 0.199951 40.1689 0.319819 40.7662 0.559555C42.0405 1.11894 42.6776 1.65835 42.6776 2.17777C42.6776 2.41751 42.4188 2.53738 41.9011 2.53738H31.4484C32.1253 2.77712 32.7823 3.05681 33.4195 3.37646C37.72 5.3343 39.8703 7.55186 39.8703 10.0291C39.8703 10.9881 39.6314 11.8871 39.1535 12.7262C39.7508 13.0858 40.0495 13.4054 40.0495 13.6851C40.0495 13.765 39.9898 13.8449 39.8703 13.9249C39.5119 14.1246 39.2332 14.4043 39.0341 14.7639C38.3173 15.603 37.4413 16.0225 36.406 16.0225C35.8883 16.0225 35.0322 15.7828 33.8376 15.3033C32.8421 14.9038 32.3443 14.5242 32.3443 14.1646L32.4041 13.9848C34.3951 11.9071 35.3905 10.129 35.3905 8.65065C35.3905 8.09127 35.2711 7.55186 35.0322 7.03243C34.7933 6.47305 34.4349 6.03353 33.957 5.71389C33.519 5.35428 33.0611 5.05461 32.5832 4.81487L32.4638 4.75494C31.8267 4.39534 31.1895 4.1556 30.5524 4.03573V24.9527C30.5524 25.1925 30.2737 25.3123 29.7162 25.3123H29.4773C25.8537 25.3123 22.4092 24.4932 19.144 22.855C15.5204 21.057 13.5692 18.6197 13.2905 15.5431C13.2905 13.9448 13.7683 12.5264 14.724 11.2878C15.9982 9.56964 18.4073 7.39204 21.9513 4.75494C22.9468 4.03573 23.9224 3.29654 24.8781 2.53738Z"
      fill="#5628EE"
    />
    <path
      d="M51.6026 1.45857C52.1999 2.17778 52.0605 2.53738 51.1845 2.53738H47.302V30.9461C47.302 31.106 47.0631 31.1659 46.5852 31.1259C46.1472 31.1259 45.6296 31.026 45.0323 30.8263C44.4748 30.6664 43.9571 30.4467 43.4793 30.167C43.0413 29.8873 42.8223 29.5477 42.8223 29.1481V2.53738H42.7028C41.6675 2.53738 40.8512 2.41751 40.2539 2.17777C39.6566 1.93804 39.1588 1.63837 38.7606 1.27876C38.1633 0.559556 38.3027 0.199951 39.1787 0.199951H48.4369C48.9545 0.199951 49.512 0.319819 50.1093 0.559555C50.7066 0.799291 51.2044 1.09896 51.6026 1.45857Z"
      fill="#5628EE"
    />
    <path
      d="M50.2092 2.53738C49.6915 2.53738 49.134 2.41751 48.5367 2.17777C47.9394 1.93804 47.4417 1.61839 47.0435 1.21883C46.4462 0.539577 46.5856 0.199951 47.4616 0.199951H76.6098C77.1275 0.199951 77.665 0.319819 78.2225 0.559555C78.8198 0.799291 79.3176 1.09896 79.7158 1.45857C80.3056 2.16881 80.1771 2.52836 79.3301 2.53721C79.3194 2.53732 79.3086 2.53738 79.2977 2.53738H50.2092ZM76.3709 14.0447C76.8886 17.0015 76.132 19.5587 74.1012 21.7163C71.9111 23.6342 69.3427 24.5132 66.396 24.3534C63.2104 24.1936 60.1243 23.4544 57.1379 22.1358C54.8283 21.2568 52.5586 20.2579 50.3286 19.1391C50.2092 19.0992 50.0101 18.9993 49.7313 18.8394C49.4526 18.6397 49.2336 18.4399 49.0743 18.2401C48.915 18.0004 48.9349 17.8006 49.134 17.6408C49.3331 17.441 49.6318 17.3811 50.03 17.461C50.468 17.5009 50.8662 17.6008 51.2246 17.7606C51.6228 17.9205 51.9214 18.0603 52.1205 18.1802C54.1514 19.219 56.2618 20.138 58.4519 20.9371C59.8456 21.4566 61.299 21.7962 62.8122 21.956C64.3652 22.1158 65.8584 21.8961 67.2919 21.2967C69.721 20.138 71.1744 18.4199 71.6522 16.1424C72.1699 13.825 71.8115 11.6074 70.5771 9.48973L70.4576 9.72947C70.2187 10.2089 69.9599 10.6684 69.6811 11.108C69.482 11.4676 69.3028 11.8272 69.1436 12.1868C68.825 12.906 68.4467 13.6252 68.0087 14.3444C66.615 16.1025 64.8032 17.0614 62.5733 17.2212C62.2149 17.2612 61.6972 17.2012 61.0203 17.0414C60.3832 16.8816 59.766 16.6419 59.1687 16.3222C58.5714 16.0026 58.2727 15.643 58.2727 15.2434V0.679423C58.2727 0.519598 58.5116 0.459664 58.9895 0.499621C59.4673 0.499621 60.0049 0.599511 60.6022 0.799291C61.1995 0.959116 61.7171 1.17887 62.1552 1.45857C62.5932 1.73826 62.8122 2.07788 62.8122 2.47744V13.1457C63.2502 12.7062 63.6285 12.2067 63.9471 11.6474C64.1063 11.3677 64.2457 11.108 64.3652 10.8682C65.281 9.19006 66.177 7.51191 67.053 5.83375L67.1725 5.71389C67.2123 5.55406 67.3716 5.45417 67.6503 5.41421C68.1282 5.29435 68.6657 5.35428 69.263 5.59402C69.9002 5.83375 70.4178 6.09347 70.816 6.37316C73.6831 8.21114 75.5347 10.7683 76.3709 14.0447Z"
      fill="#5628EE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M130.888 0.199951C131.246 0.199951 131.632 0.257169 132.047 0.371614C132.205 0.42281 132.376 0.485457 132.561 0.559555C133.198 0.799291 133.716 1.09896 134.114 1.45857C134.711 2.17778 134.572 2.53738 133.696 2.53738C134.612 2.53738 134.751 2.17778 134.114 1.45857C133.716 1.09896 133.218 0.799291 132.621 0.559555C132.424 0.485458 132.233 0.422809 132.047 0.371614C131.694 0.257172 131.407 0.199951 131.187 0.199951H130.888ZM76.6098 0.199951H75.8683C74.9923 0.199951 74.8529 0.559556 75.4502 1.27876C75.8484 1.63837 76.3462 1.93804 76.9435 2.17777C77.5287 2.41268 78.3243 2.53248 79.3301 2.53721C80.1771 2.52836 80.3056 2.16881 79.7158 1.45857C79.3176 1.09896 78.8198 0.799291 78.2225 0.559555C77.665 0.319819 77.1275 0.199951 76.6098 0.199951Z"
      fill="#5628EE"
    />
  </svg>
);

const LogoDark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 135 41"
    className="h-9 w-auto fill-slate-700 dark:fill-sky-100"
  >
    <path
      d="M23.6661 29.1879C25.1792 29.4276 26.6127 29.987 27.9666 30.866C29.3205 31.785 29.9974 33.0836 29.9974 34.7618C29.8382 36.5997 29.0617 37.8983 27.668 38.6575C26.2743 39.4566 24.6815 39.8961 22.8896 39.976C21.0977 40.0559 19.5248 39.9361 18.1709 39.6164C12.5563 38.5776 8.05663 35.7607 4.67194 31.1657C1.84472 26.6107 0.650118 21.6961 1.08814 16.4219C1.52616 11.1078 3.41761 6.41295 6.76248 2.33743C7.3996 1.49835 8.25573 0.719209 9.33087 0H10.7644C11.3219 0.119868 11.8993 0.339626 12.4966 0.659275C13.1337 0.938967 13.4522 1.25862 13.4522 1.61822C13.4921 1.93787 13.4124 2.21756 13.2133 2.4573C9.66934 5.8136 7.37969 9.86914 6.34437 14.6239C5.38869 19.3787 5.76698 24.0336 7.47924 28.5886C8.71366 32.2246 11.0033 34.9216 14.3482 36.6796C15.8613 37.3589 17.5736 37.6586 19.485 37.5787C21.3963 37.4987 22.9692 36.8195 24.2036 35.5409C24.7611 34.9016 25.0996 34.1624 25.219 33.3233C25.2589 32.8838 25.219 32.4443 25.0996 32.0048C25.0996 32.0048 25.0996 31.9648 25.0996 31.8849C24.9801 31.6052 24.7213 31.4254 24.3231 31.3455C24.0443 31.3455 23.7656 31.3655 23.4869 31.4055C23.009 31.4454 22.6307 31.6252 22.352 31.9449C22.0733 32.3045 22.0135 32.724 22.1728 33.2035C22.2525 33.4033 22.2126 33.5431 22.0534 33.623C21.8941 33.7029 21.6751 33.7229 21.3963 33.6829C21.1176 33.6829 20.8588 33.663 20.6198 33.623C20.3809 33.5831 20.2216 33.5431 20.142 33.5031C19.6642 33.3833 19.1465 33.1835 18.589 32.9038C18.0315 32.6641 17.6333 32.3045 17.3944 31.825C17.1953 31.1457 17.275 30.5464 17.6333 30.027C17.9917 29.5475 18.4895 29.2278 19.1266 29.068C20.6397 28.7883 22.1529 28.8283 23.6661 29.1879Z"
      fill="white"
    />
    <path
      d="M26.507 22.8349V6.71261C23.5603 9.03007 21.6688 10.6083 20.8326 11.4474C19.1602 13.1256 18.324 14.8437 18.324 16.6017C18.324 18.5596 19.1801 20.1578 20.8923 21.3965C22.525 22.3554 24.3169 22.8349 26.268 22.8349H26.507ZM25.3721 2.33743H13.665C13.1474 2.33743 12.5899 2.21756 11.9926 1.97782C10.7183 1.49835 10.0812 0.958945 10.0812 0.359603C10.0812 0.119868 10.3401 0 10.8577 0H39.5878C40.1055 0 40.663 0.119868 41.2603 0.359603C42.5345 0.918988 43.1716 1.45839 43.1716 1.97782C43.1716 2.21756 42.9128 2.33743 42.3951 2.33743H31.9424C32.6193 2.57716 33.2764 2.85686 33.9135 3.17651C38.214 5.13435 40.3643 7.35191 40.3643 9.82919C40.3643 10.7881 40.1254 11.6871 39.6476 12.5262C40.2449 12.8858 40.5435 13.2055 40.5435 13.4852C40.5435 13.5651 40.4838 13.645 40.3643 13.7249C40.0059 13.9247 39.7272 14.2044 39.5281 14.564C38.8113 15.4031 37.9353 15.8226 36.9 15.8226C36.3823 15.8226 35.5262 15.5829 34.3316 15.1034C33.3361 14.7038 32.8383 14.3242 32.8383 13.9646L32.8981 13.7848C34.8891 11.7071 35.8846 9.92908 35.8846 8.4507C35.8846 7.89132 35.7651 7.35191 35.5262 6.83248C35.2873 6.2731 34.9289 5.83358 34.451 5.51393C34.013 5.15433 33.5551 4.85466 33.0773 4.61492L32.9578 4.55499C32.3207 4.19538 31.6836 3.95565 31.0464 3.83578V24.7528C31.0464 24.9925 30.7677 25.1124 30.2102 25.1124H29.9713C26.3477 25.1124 22.9033 24.2933 19.638 22.6551C16.0144 20.8571 14.0632 18.4197 13.7845 15.3431C13.7845 13.7449 14.2623 12.3264 15.218 11.0878C16.4922 9.36969 18.9014 7.19209 22.4453 4.55499C23.4408 3.83578 24.4164 3.09659 25.3721 2.33743Z"
      fill="white"
    />
    <path
      d="M52.0966 1.25862C52.6939 1.97782 52.5545 2.33743 51.6785 2.33743H47.796V30.7462C47.796 30.906 47.5571 30.9659 47.0793 30.926C46.6412 30.926 46.1236 30.8261 45.5263 30.6263C44.9688 30.4665 44.4512 30.2467 43.9733 29.967C43.5353 29.6873 43.3163 29.3477 43.3163 28.9482V2.33743H43.1968C42.1615 2.33743 41.3452 2.21756 40.7479 1.97782C40.1506 1.73809 39.6528 1.43842 39.2546 1.07881C38.6573 0.359605 38.7967 0 39.6728 0H48.9309C49.4486 0 50.006 0.119868 50.6033 0.359603C51.2006 0.59934 51.6984 0.899011 52.0966 1.25862Z"
      fill="white"
    />
    <path
      d="M50.7032 2.33743C50.1855 2.33743 49.6281 2.21756 49.0308 1.97782C48.4335 1.73809 47.9357 1.41844 47.5375 1.01888C46.9402 0.339626 47.0796 0 47.9556 0H77.1038C77.6215 0 78.1591 0.119868 78.7165 0.359603C79.3138 0.59934 79.8116 0.899011 80.2098 1.25862C80.8071 1.97782 80.6677 2.33743 79.7917 2.33743H50.7032ZM76.8649 13.8448C77.3826 16.8015 76.626 19.3587 74.5952 21.5163C72.4051 23.4342 69.8367 24.3133 66.89 24.1534C63.7044 23.9936 60.6184 23.2544 57.6319 21.9359C55.3223 21.0568 53.0526 20.0579 50.8227 18.9392C50.7032 18.8992 50.5041 18.7993 50.2254 18.6395C49.9466 18.4397 49.7276 18.2399 49.5683 18.0402C49.409 17.8004 49.429 17.6006 49.6281 17.4408C49.8272 17.241 50.1258 17.1811 50.524 17.261C50.962 17.301 51.3602 17.4009 51.7186 17.5607C52.1168 17.7205 52.4155 17.8604 52.6146 17.9802C54.6454 19.0191 56.7558 19.9381 58.9459 20.7372C60.3396 21.2566 61.7931 21.5962 63.3062 21.7561C64.8592 21.9159 66.3524 21.6961 67.786 21.0968C70.215 19.9381 71.6684 18.22 72.1463 15.9425C72.6639 13.625 72.3055 11.4075 71.0711 9.28978L70.9517 9.52952C70.7127 10.009 70.4539 10.4685 70.1752 10.908C69.9761 11.2676 69.7969 11.6272 69.6376 11.9868C69.319 12.706 68.9407 13.4252 68.5027 14.1444C67.109 15.9025 65.2972 16.8615 63.0673 17.0213C62.7089 17.0612 62.1913 17.0013 61.5143 16.8415C60.8772 16.6816 60.26 16.4419 59.6627 16.1223C59.0654 15.8026 58.7667 15.443 58.7667 15.0435V0.479472C58.7667 0.319647 59.0057 0.259713 59.4835 0.29967C59.9613 0.29967 60.4989 0.39956 61.0962 0.59934C61.6935 0.759165 62.2112 0.978923 62.6492 1.25862C63.0872 1.53831 63.3062 1.87793 63.3062 2.27749V12.9458C63.7442 12.5062 64.1225 12.0068 64.4411 11.4474C64.6004 11.1677 64.7397 10.908 64.8592 10.6683C65.7751 8.99011 66.671 7.31196 67.547 5.6338L67.6665 5.51393C67.7063 5.35411 67.8656 5.25422 68.1443 5.21426C68.6222 5.09439 69.1598 5.15433 69.7571 5.39407C70.3942 5.6338 70.9118 5.89352 71.31 6.17321C74.1771 8.01119 76.0287 10.5684 76.8649 13.8448Z"
      fill="white"
    />
    <path
      d="M88.7862 1.25862C89.3835 1.97782 89.2441 2.33743 88.3681 2.33743H84.4856V30.7462C84.4856 30.906 84.2467 30.9659 83.7689 30.926C83.3308 30.926 82.8132 30.8261 82.2159 30.6263C81.6584 30.4665 81.1407 30.2467 80.6629 29.967C80.2249 29.6873 80.0059 29.3477 80.0059 28.9482V2.33743H79.8864C78.8511 2.33743 78.0348 2.21756 77.4375 1.97782C76.8402 1.73809 76.3424 1.43842 75.9442 1.07881C75.3469 0.359605 75.4863 0 76.3623 0H85.6205C86.1381 0 86.6956 0.119868 87.2929 0.359603C87.8902 0.59934 88.388 0.899011 88.7862 1.25862Z"
      fill="white"
    />
    <path
      d="M113.196 2.33743H87.4525C86.9747 2.33743 86.4172 2.19758 85.7801 1.91789C84.5058 1.39846 83.8687 0.879032 83.8687 0.359603C83.8687 0.119868 84.1275 0 84.6452 0H110.329C110.847 0 111.424 0.119868 112.061 0.359603C113.335 0.879032 113.973 1.41844 113.973 1.97782C113.973 2.21756 113.714 2.33743 113.196 2.33743ZM110.21 25.412C109.652 25.412 109.075 25.3122 108.477 25.1124C106.964 24.6729 106.208 24.0935 106.208 23.3743V20.2577C106.048 17.1811 105.133 14.3842 103.46 11.8669C103.341 12.6661 102.783 15.0634 101.788 19.059V19.2988C101.788 20.4175 101.429 20.9769 100.713 20.9769C100.513 20.9769 100.155 20.937 99.6374 20.8571C99.1596 20.7771 98.5822 20.5374 97.9053 20.1378C97.2283 19.7383 96.8898 19.3187 96.8898 18.8792L97.1885 17.5007C97.0292 16.4619 96.5315 15.3231 95.6953 14.0845C94.7794 12.5662 94.1622 11.5873 93.8436 11.1477C93.8436 13.5851 93.3061 16.4419 92.2309 19.7183C92.1115 19.9181 91.8725 20.018 91.5142 20.018C90.9567 20.018 90.3395 19.8781 89.6625 19.5984C88.3485 19.119 87.6914 18.5995 87.6914 18.0402L88.1693 16.1822C88.2091 15.9025 88.229 15.5829 88.229 15.2233C88.229 14.8636 88.1693 14.564 88.0498 14.3242C87.9702 14.0446 87.8507 13.8248 87.6914 13.665C87.572 13.5051 87.4525 13.3653 87.3331 13.2454C87.2534 13.0856 87.2136 12.9657 87.2136 12.8858C87.2136 12.6061 87.4525 12.4663 87.9304 12.4663C88.2489 12.4663 88.5874 12.5262 88.9458 12.6461L89.0055 12.4064C89.2444 10.928 89.3639 9.48956 89.3639 8.0911L89.3041 7.13215H89.2444C88.886 6.77255 88.7068 6.51283 88.7068 6.35301C88.7068 6.11327 88.9856 5.97343 89.5431 5.93347C91.335 5.97343 92.9078 6.55279 94.2617 7.67156C95.6554 8.75037 97.069 10.4086 98.5026 12.6461C98.9008 11.3275 99.0999 9.98901 99.0999 8.63051C99.0999 7.95125 99.0401 7.25202 98.9207 6.53281V6.41294C98.9207 6.25312 99.0003 6.15323 99.1596 6.11327C99.3189 6.03336 99.518 5.99341 99.7569 5.99341L100.235 6.05334C102.027 6.41294 104.018 7.9113 106.208 10.5484V0.839077C106.208 0.679252 106.367 0.59934 106.686 0.59934C107.124 0.59934 107.721 0.69923 108.477 0.89901C109.951 1.29857 110.687 1.85796 110.687 2.57716V25.1723C110.687 25.3321 110.528 25.412 110.21 25.412Z"
      fill="white"
    />
    <path
      d="M112.687 2.33743C112.169 2.33743 111.751 2.23754 111.433 2.03776C111.114 1.79802 110.776 1.47837 110.417 1.07881C109.82 0.359605 109.959 0 110.835 0H131.681C132 0 132.458 0.119868 133.055 0.359603C133.692 0.59934 134.21 0.899011 134.608 1.25862C135.205 1.97782 135.066 2.33743 134.19 2.33743H112.687ZM127.201 22.9547V2.33743H118.6C119.715 3.01668 120.79 3.75587 121.826 4.55499C123.02 5.35411 123.976 6.33303 124.693 7.49176C125.011 8.17101 125.091 8.81031 124.932 9.40965C124.733 10.009 124.374 10.5684 123.857 11.0878C122.861 12.2465 121.766 13.3054 120.571 14.2643C120.452 14.3842 120.313 14.4841 120.153 14.564C119.675 14.9635 119.237 15.4031 118.839 15.8825C118.401 16.362 118.262 16.9214 118.421 17.5607C118.58 18.1201 118.899 18.5995 119.377 18.9991C119.855 19.4386 120.332 19.8182 120.81 20.1378C120.85 20.1778 120.91 20.2178 120.989 20.2577C122.861 21.5763 124.932 22.4753 127.201 22.9547ZM123.618 25.3521C123.817 25.432 123.896 25.5519 123.857 25.7117C123.777 25.8715 123.638 26.0513 123.438 26.2511C123.239 26.4109 123.04 26.5508 122.841 26.6707C122.682 26.7905 122.562 26.8704 122.483 26.9104C122.085 27.1501 121.587 27.3899 120.989 27.6296C120.432 27.8693 119.954 27.8893 119.556 27.6895C118.202 26.9703 116.769 26.5907 115.255 26.5508C114.937 26.5108 114.778 26.4109 114.778 26.2511C114.817 26.0513 114.917 25.8516 115.076 25.6518C115.275 25.412 115.455 25.2522 115.614 25.1723C116.53 24.4131 117.585 24.0136 118.779 23.9736C120.492 24.0136 122.104 24.4731 123.618 25.3521ZM134.608 1.25862C135.245 1.97782 135.106 2.33743 134.19 2.33743H131.741V25.2322C131.621 25.432 131.363 25.5119 130.964 25.472C127.341 25.0325 123.916 23.9337 120.691 22.1756C119.138 21.3365 117.684 20.3576 116.331 19.2388C115.773 18.7993 115.235 18.2999 114.718 17.7405C114.2 17.1811 113.882 16.5418 113.762 15.8226C113.722 15.1034 113.921 14.4841 114.359 13.9646C114.797 13.4452 115.295 12.9857 115.853 12.5862C115.853 12.5462 115.873 12.5262 115.912 12.5262C117.346 11.4474 118.64 10.1688 119.795 8.69044C120.711 7.29198 120.492 6.07332 119.138 5.03446C117.903 4.07552 116.609 3.17651 115.255 2.33743H112.687C112.169 2.33743 111.751 2.23754 111.433 2.03776C111.114 1.79802 110.776 1.47837 110.417 1.07881C109.82 0.359605 109.959 0 110.835 0H131.382C131.9 0 132.478 0.119868 133.115 0.359603C133.712 0.59934 134.21 0.899011 134.608 1.25862Z"
      fill="white"
    />
    <path
      d="M23.6661 29.1879C25.1792 29.4276 26.6127 29.987 27.9666 30.866C29.3205 31.785 29.9974 33.0836 29.9974 34.7618C29.8382 36.5997 29.0617 37.8983 27.668 38.6575C26.2743 39.4566 24.6815 39.8961 22.8896 39.976C21.0977 40.0559 19.5248 39.9361 18.1709 39.6164C12.5563 38.5776 8.05663 35.7607 4.67194 31.1657C1.84472 26.6107 0.650118 21.6961 1.08814 16.4219C1.52616 11.1078 3.41761 6.41295 6.76248 2.33743C7.3996 1.49835 8.25573 0.719209 9.33087 0H10.7644C11.3219 0.119868 11.8993 0.339626 12.4966 0.659275C13.1337 0.938967 13.4522 1.25862 13.4522 1.61822C13.4921 1.93787 13.4124 2.21756 13.2133 2.4573C9.66934 5.8136 7.37969 9.86914 6.34437 14.6239C5.38869 19.3787 5.76698 24.0336 7.47924 28.5886C8.71366 32.2246 11.0033 34.9216 14.3482 36.6796C15.8613 37.3589 17.5736 37.6586 19.485 37.5787C21.3963 37.4987 22.9692 36.8195 24.2036 35.5409C24.7611 34.9016 25.0996 34.1624 25.219 33.3233C25.2589 32.8838 25.219 32.4443 25.0996 32.0048C25.0996 32.0048 25.0996 31.9648 25.0996 31.8849C24.9801 31.6052 24.7213 31.4254 24.3231 31.3455C24.0443 31.3455 23.7656 31.3655 23.4869 31.4055C23.009 31.4454 22.6307 31.6252 22.352 31.9449C22.0733 32.3045 22.0135 32.724 22.1728 33.2035C22.2525 33.4033 22.2126 33.5431 22.0534 33.623C21.8941 33.7029 21.6751 33.7229 21.3963 33.6829C21.1176 33.6829 20.8588 33.663 20.6198 33.623C20.3809 33.5831 20.2216 33.5431 20.142 33.5031C19.6642 33.3833 19.1465 33.1835 18.589 32.9038C18.0315 32.6641 17.6333 32.3045 17.3944 31.825C17.1953 31.1457 17.275 30.5464 17.6333 30.027C17.9917 29.5475 18.4895 29.2278 19.1266 29.068C20.6397 28.7883 22.1529 28.8283 23.6661 29.1879Z"
      fill="#5628EE"
    />
    <path
      d="M26.507 22.8349V6.71261C23.5603 9.03007 21.6688 10.6083 20.8326 11.4474C19.1602 13.1256 18.324 14.8437 18.324 16.6017C18.324 18.5596 19.1801 20.1578 20.8923 21.3965C22.525 22.3554 24.3169 22.8349 26.268 22.8349H26.507ZM25.3721 2.33743H13.665C13.1474 2.33743 12.5899 2.21756 11.9926 1.97782C10.7183 1.49835 10.0812 0.958945 10.0812 0.359603C10.0812 0.119868 10.3401 0 10.8577 0H39.5878C40.1055 0 40.663 0.119868 41.2603 0.359603C42.5345 0.918988 43.1716 1.45839 43.1716 1.97782C43.1716 2.21756 42.9128 2.33743 42.3951 2.33743H31.9424C32.6193 2.57716 33.2764 2.85686 33.9135 3.17651C38.214 5.13435 40.3643 7.35191 40.3643 9.82919C40.3643 10.7881 40.1254 11.6871 39.6476 12.5262C40.2449 12.8858 40.5435 13.2055 40.5435 13.4852C40.5435 13.5651 40.4838 13.645 40.3643 13.7249C40.0059 13.9247 39.7272 14.2044 39.5281 14.564C38.8113 15.4031 37.9353 15.8226 36.9 15.8226C36.3823 15.8226 35.5262 15.5829 34.3316 15.1034C33.3361 14.7038 32.8383 14.3242 32.8383 13.9646L32.8981 13.7848C34.8891 11.7071 35.8846 9.92908 35.8846 8.4507C35.8846 7.89132 35.7651 7.35191 35.5262 6.83248C35.2873 6.2731 34.9289 5.83358 34.451 5.51393C34.013 5.15433 33.5551 4.85466 33.0773 4.61492L32.9578 4.55499C32.3207 4.19538 31.6836 3.95565 31.0464 3.83578V24.7528C31.0464 24.9925 30.7677 25.1124 30.2102 25.1124H29.9713C26.3477 25.1124 22.9033 24.2933 19.638 22.6551C16.0144 20.8571 14.0632 18.4197 13.7845 15.3431C13.7845 13.7449 14.2623 12.3264 15.218 11.0878C16.4922 9.36969 18.9014 7.19209 22.4453 4.55499C23.4408 3.83578 24.4164 3.09659 25.3721 2.33743Z"
      fill="#5628EE"
    />
    <path
      d="M52.0966 1.25862C52.6939 1.97782 52.5545 2.33743 51.6785 2.33743H47.796V30.7462C47.796 30.906 47.5571 30.9659 47.0793 30.926C46.6412 30.926 46.1236 30.8261 45.5263 30.6263C44.9688 30.4665 44.4512 30.2467 43.9733 29.967C43.5353 29.6873 43.3163 29.3477 43.3163 28.9482V2.33743H43.1968C42.1615 2.33743 41.3452 2.21756 40.7479 1.97782C40.1506 1.73809 39.6528 1.43842 39.2546 1.07881C38.6573 0.359605 38.7967 0 39.6728 0H48.9309C49.4486 0 50.006 0.119868 50.6033 0.359603C51.2006 0.59934 51.6984 0.899011 52.0966 1.25862Z"
      fill="#5628EE"
    />
    <path
      d="M50.7032 2.33743C50.1855 2.33743 49.6281 2.21756 49.0308 1.97782C48.4335 1.73809 47.9357 1.41844 47.5375 1.01888C46.9402 0.339626 47.0796 0 47.9556 0H77.1038C77.6215 0 78.1591 0.119868 78.7165 0.359603C79.3138 0.59934 79.8116 0.899011 80.2098 1.25862C80.7996 1.96886 80.6711 2.32841 79.8241 2.33726C79.8134 2.33737 79.8026 2.33743 79.7917 2.33743H50.7032ZM76.8649 13.8448C77.3826 16.8015 76.626 19.3587 74.5952 21.5163C72.4051 23.4342 69.8367 24.3133 66.89 24.1534C63.7044 23.9936 60.6184 23.2544 57.6319 21.9359C55.3223 21.0568 53.0526 20.0579 50.8227 18.9392C50.7032 18.8992 50.5041 18.7993 50.2254 18.6395C49.9466 18.4397 49.7276 18.2399 49.5683 18.0402C49.409 17.8004 49.429 17.6006 49.6281 17.4408C49.8272 17.241 50.1258 17.1811 50.524 17.261C50.962 17.301 51.3602 17.4009 51.7186 17.5607C52.1168 17.7205 52.4155 17.8604 52.6146 17.9802C54.6454 19.0191 56.7558 19.9381 58.9459 20.7372C60.3396 21.2566 61.7931 21.5962 63.3062 21.7561C64.8592 21.9159 66.3524 21.6961 67.786 21.0968C70.215 19.9381 71.6684 18.22 72.1463 15.9425C72.6639 13.625 72.3055 11.4075 71.0711 9.28978L70.9517 9.52952C70.7127 10.009 70.4539 10.4685 70.1752 10.908C69.9761 11.2676 69.7969 11.6272 69.6376 11.9868C69.319 12.706 68.9407 13.4252 68.5027 14.1444C67.109 15.9025 65.2972 16.8615 63.0673 17.0213C62.7089 17.0612 62.1913 17.0013 61.5143 16.8415C60.8772 16.6816 60.26 16.4419 59.6627 16.1223C59.0654 15.8026 58.7667 15.443 58.7667 15.0435V0.479472C58.7667 0.319647 59.0057 0.259713 59.4835 0.29967C59.9613 0.29967 60.4989 0.39956 61.0962 0.59934C61.6935 0.759165 62.2112 0.978923 62.6492 1.25862C63.0872 1.53831 63.3062 1.87793 63.3062 2.27749V12.9458C63.7442 12.5062 64.1225 12.0068 64.4411 11.4474C64.6004 11.1677 64.7397 10.908 64.8592 10.6683C65.7751 8.99011 66.671 7.31196 67.547 5.6338L67.6665 5.51393C67.7063 5.35411 67.8656 5.25422 68.1443 5.21426C68.6222 5.09439 69.1598 5.15433 69.7571 5.39407C70.3942 5.6338 70.9118 5.89352 71.31 6.17321C74.1771 8.01119 76.0287 10.5684 76.8649 13.8448Z"
      fill="#5628EE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M131.382 0C131.74 0 132.126 0.0572177 132.541 0.171663C132.699 0.222858 132.87 0.285506 133.055 0.359603C133.692 0.59934 134.21 0.899011 134.608 1.25862C135.205 1.97782 135.066 2.33743 134.19 2.33743C135.106 2.33743 135.245 1.97782 134.608 1.25862C134.21 0.899011 133.712 0.59934 133.115 0.359603C132.918 0.285507 132.727 0.222858 132.541 0.171663C132.188 0.057221 131.901 0 131.681 0H131.382ZM77.1038 0H76.3623C75.4863 0 75.3469 0.359605 75.9442 1.07881C76.3424 1.43842 76.8402 1.73809 77.4375 1.97782C78.0227 2.21273 78.8183 2.33253 79.8241 2.33726C80.6711 2.32841 80.7996 1.96886 80.2098 1.25862C79.8116 0.899011 79.3138 0.59934 78.7165 0.359603C78.1591 0.119868 77.6215 0 77.1038 0Z"
      fill="#5628EE"
    />
  </svg>
);

export const Logo = ({ variant = 'light' }: LogoProps) => {
  return variant === 'dark' ? <LogoDark /> : <LogoLight />;
};