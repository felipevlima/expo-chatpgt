import { Text, View } from "react-native"
import * as DropdownMenu from 'zeego/dropdown-menu'

export type HeaderDropDownProps = {
  title: string,
  selected?: string
  onSelect: (key: string) => void
  items: Array<{ key: string; title: string; icon: string }>
}

const HeaderDropDown = ({ items, onSelect, title, selected }: HeaderDropDownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <View>
          <Text style={{ fontWeight: '500', fontSize: 16 }}>{title}</Text>
        </View>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {items.map((item) => (
          <DropdownMenu.Item 
            key={item.key}
            onSelect={() => onSelect(item.key)}
          >
            <DropdownMenu.ItemTitle>{item.title}</DropdownMenu.ItemTitle>
            <DropdownMenu.ItemIcon ios={{
              name: item.icon,
              pointSize: 18
            }}/>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default HeaderDropDown