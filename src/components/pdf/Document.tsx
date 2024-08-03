import { Page, Text, Document } from '@react-pdf/renderer'

import { styles } from './documentFormat'
import Indexs from './pieces/Indexs'
import Info from './pieces/Info'
import InsideCover from './pieces/InsideCover'

interface PageProps {
  chapterTitle: string
  text: string
}

interface DocumentProps {
  content: PageProps[]
}

export const MyDocument = ({ content }: DocumentProps) => (
  <Document author='' title='' subject='' keywords='' language=''>
    <InsideCover />
    <Info />
    {/* introduccion */}
    <Indexs />
    {content.map((chapter, index) => (
      <Page style={styles.body} key={index}>
        <Text style={styles.subtitle}>{chapter.chapterTitle}</Text>
        <Text style={styles.text}>{chapter.text}</Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    ))}
  </Document>
)
