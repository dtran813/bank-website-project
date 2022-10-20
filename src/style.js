const styles = {
  boxWidth: 'xl:max-w-7xl w-full',

  heading2:
    'font-semibold sm:text-5xl text-4xl text-white sm:leading-[76.8px] leading-[66.8px] w-full',
  paragraph:
    'font-normal text-dimWhite sm:text-lg text-sm sm:leading-9 leading',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  padding: 'sm:px-16 px-6 sm:py-12 py-4',
  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
