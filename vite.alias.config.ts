import path from 'path'

const aliasConfig = {
  alias: {
    '@components': path.resolve(__dirname, 'src/components'),
    '@ui': path.resolve(__dirname, 'src/components/common/ui'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  }
}

export default aliasConfig