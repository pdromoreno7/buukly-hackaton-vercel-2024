import { Page, Text, View } from '@react-pdf/renderer'

import { styles } from '../documentFormat'

export default function InsideCover() {
  return (
    <Page>
      <View style={styles.header}>
        <Text style={styles.title}>Generado con AI</Text>
        <Text style={styles.author}>Generado por AI from Kiwibook</Text>
      </View>
    </Page>
  )
}
