import { Page, Text, View } from '@react-pdf/renderer'

import { commonStyles, infoPageStyles } from '../documentFormat'

export default function Info() {
  return (
    <Page style={commonStyles.body}>
      <View style={commonStyles.header}>
        <Text style={infoPageStyles.title}>Titulo del libro</Text>
        <Text style={infoPageStyles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae
          deleniti error ut temporibus in, provident ullam eaque mollitia,
          similique, porro tenetur aspernatur nisi corrupti pariatur consequatur
          dolorem magnam omnis.
        </Text>
      </View>
    </Page>
  )
}
