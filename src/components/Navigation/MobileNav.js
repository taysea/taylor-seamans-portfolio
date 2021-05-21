import React, { useState } from "react"
import { Box, Button, Keyboard, Layer, Text } from "grommet"
import { Close, Menu } from "grommet-icons"
import { NavItems } from "."
import { PartialWidthSection } from "../../layouts/PartialWidth"
import { CategoryLink } from ".."

export const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button icon={<Menu />} onClick={() => setOpen(true)} />
      {open && (
        <Keyboard onEsc={() => setOpen(false)}>
          <Layer full animate="fadeIn">
            <Box fill background="white">
              <Box pad={{ right: "medium", top: "large" }}>
                <Button
                  alignSelf="end"
                  icon={<Close />}
                  onClick={() => setOpen(false)}
                />
              </Box>
              <PartialWidthSection>
                <Box gap="large">
                  {NavItems.map(item => (
                    <CategoryLink
                      key={item}
                      to={
                        item !== "About" && item !== "Shop" && item !== "Cart"
                          ? `/categories/${item.toLowerCase()}`
                          : `/${item.toLowerCase()}`
                      }
                    >
                      <Box pad="medium" align="center">
                        <Text weight="bold">{item}</Text>
                      </Box>
                    </CategoryLink>
                  ))}
                </Box>
              </PartialWidthSection>
            </Box>
          </Layer>
        </Keyboard>
      )}
    </>
  )
}
