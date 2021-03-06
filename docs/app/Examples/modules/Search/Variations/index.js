import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SearchVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Fluid'
      description='A search can have its results take up the width of its container.'
      examplePath='modules/Search/Variations/SearchExampleFluid'
    />
    <ComponentExample
      title='Aligned'
      description='A search can have its results aligned to its left or right container edge.'
      examplePath='modules/Search/Variations/SearchExampleAligned'
    />
  </ExampleSection>
)

export default SearchVariationsExamples
