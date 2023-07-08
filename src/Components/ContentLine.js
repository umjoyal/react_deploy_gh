const ContentLine = ({ item, entries }) => {
  return (
    <tr key={item.id}>
      {entries.map((key)=><td key={key}>{JSON.stringify(item[key])}</td>)}
    </tr>
  )
}

export default ContentLine