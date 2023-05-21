import { Accordion, AccordionToggle, AccordionContent, AccordionGroup } from '@strapi/design-system';
() => {
  const [expandedID, setExpandedID] = useState(null);
  const handleToggle = id => () => {
    setExpandedID(s => s === id ? null : id);
  };
  return <div>
          <Box padding={8} background="neutral0">
            <AccordionGroup error="The components contain error(s)" footer={<Flex justifyContent="center" height="48px" background="neutral150">
                  <TextButton disabled startIcon={<Plus />}>
                    Add an entry
                  </TextButton>
                </Flex>} label="Label" labelAction={<Tooltip description="Content of the tooltip">
                  <button aria-label="Information about the email" style={{
          border: 'none',
          padding: 0,
          background: 'transparent'
        }}>
                    <Information aria-hidden />
                  </button>
                </Tooltip>}>
              <Accordion error="The components contain error(s)" expanded={expandedID === 'acc-1'} onToggle={handleToggle('acc-1')} id="acc-1" size="S">
                <AccordionToggle startIcon={<User aria-hidden />} action={<Flex horizontal gap={0}>
                      <IconButton noBorder onClick={() => console.log('edit')} label="Edit" icon={<Pencil />} />
                      <IconButton noBorder onClick={() => console.log('delete')} label="Delete" icon={<Trash />} />
                    </Flex>} title="User informations" togglePosition="left" />
                <AccordionContent>
                  <Box padding={3}>
                    <TextInput label="Name" />
                  </Box>
                </AccordionContent>
              </Accordion>
              <Accordion error="The component contain error(s)" expanded={expandedID === 'acc-2'} onToggle={handleToggle('acc-2')} id="acc-2" size="S">
                <AccordionToggle title="User informations" togglePosition="left" />
                <AccordionContent>
                  <Box padding={3}>
                    <Typography>My name is John Duff</Typography>
                  </Box>
                </AccordionContent>
              </Accordion>
              <Accordion expanded={expandedID === 'acc-3'} onToggle={handleToggle('acc-3')} id="acc-3" size="S">
                <AccordionToggle title="User informations" togglePosition="left" />
                <AccordionContent>
                  <Box padding={3}>
                    <Typography>My name is Michka</Typography>
                  </Box>
                </AccordionContent>
              </Accordion>
              <Accordion expanded={expandedID === 'acc-4'} onToggle={handleToggle('acc-4')} id="acc-4" size="S">
                <AccordionToggle startIcon={<User aria-hidden />} title="User informations" togglePosition="left" />
                <AccordionContent>
                  <Box padding={3}>
                    <Typography>My name is John Duff</Typography>
                  </Box>
                </AccordionContent>
              </Accordion>
            </AccordionGroup>
          </Box>
        </div>;
}
