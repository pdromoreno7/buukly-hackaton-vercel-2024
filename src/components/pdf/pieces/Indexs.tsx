import { Page, Text, View } from '@react-pdf/renderer'

import { commonStyles, indexsPageStyles } from '../documentFormat'

const indices = [
  {
    title: 'General',
    page: 1,
  },
  {
    title: 'Figuras',
    page: 2,
  },
  {
    title: 'Tablas',
    page: 3,
  },
  {
    title: 'Anexos',
    page: 4,
  },
]

export default function Indexs() {
  return (
    <Page style={commonStyles.body}>
      <View style={commonStyles.header}>
        <Text style={indexsPageStyles.title}>Índice general</Text>
      </View>

      {indices.map((index, indexKey) => (
        <View key={indexKey} style={indexsPageStyles.orderList}>
          <Text style={indexsPageStyles.titleList}>{index.title}</Text>
          <Text style={indexsPageStyles.titleList}>{index.page}</Text>
        </View>
      ))}
    </Page>
  )
}
