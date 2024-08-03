import { Font, StyleSheet } from '@react-pdf/renderer'

Font.register({
  family: 'Bookerly',
  fonts: [
    { src: '/fonts/Bookerly.ttf', fontWeight: 'normal', fontStyle: 'normal' },
    {
      src: '/fonts/Bookerly-Bold.ttf',
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    {
      src: '/fonts/Bookerly-Italic.ttf',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ],
})

Font.register({
  family: 'Oswald',
  fonts: [
    {
      src: '/fonts/Oswald-Regular.ttf',
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    { src: '/fonts/Oswald-Bold.ttf', fontWeight: 'bold', fontStyle: 'normal' },
  ],
})

export const commonStyles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    fontSize: 12,
    marginVertical: 24,
  },
})

export const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
    fontWeight: 'bold',
  },
  author: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'Oswald',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 12,
    marginHorizontal: 12,
    marginBottom: 2,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Bookerly',
    whiteSpace: 'pre-line',
    lineHeight: 1.5,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginVertical: 24,
    textAlign: 'center',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 8,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
})

export const indexsPageStyles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
    fontWeight: 'normal',
  },
  orderList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
  },
  titleList: {
    fontSize: 10,
    textAlign: 'left',
    fontFamily: 'Bookerly',
    fontWeight: 'normal',
    marginVertical: 2,
  },
})

export const infoPageStyles = StyleSheet.create({
  title: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Bookerly',
    fontWeight: 'normal',
  },
  text: {
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Bookerly',
    whiteSpace: 'pre-line',
    lineHeight: 1.5,
    marginVertical: 12,
  },
})
