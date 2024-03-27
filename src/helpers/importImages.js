export const importAllImages = (path)=>{
     return require.context(path, false, /\.(png|jpe?g|svg)$/);
}