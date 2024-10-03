import {EditorLayout, LayoutData, PrepareFunction} from '../types'
// @ts-expect-error
import BrandWrapper from '@/app/(site)/components/ui/BrandWrapper'
import * as React from 'react'

export const BrandLayoutComponent: React.FC<LayoutData> = ({title, gradiantColor}) => {
  return (
    <BrandWrapper textColor="black" gradientColor="pink" gradientDirection="bottomRight">
      {title && title}
    </BrandWrapper>
  )
}

// Ideally, users will provide their own prepare function, this is an unlikely fallback
export const defaultPrepare: PrepareFunction<LayoutData> = (document) => {
  return {
    // Possible common values for title & image
    title: document.title || document.seoTitle || document.seo?.title || document.hero?.title,
    logo: document.ogImage || document.image || document.hero?.image || document.logo,
    includeBorder: false,
  }
}

const brandLayout: EditorLayout = {
  name: 'brand',
  title: 'Brand layout',
  component: BrandLayoutComponent,

  prepare: defaultPrepare,
  fields: [
    {
      title: 'Image Text',
      name: 'title',
      type: 'string',
    },
  ],
}

export default brandLayout
