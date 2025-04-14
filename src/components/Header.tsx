import { Avatar, Box, Flex, Image, Link, Text } from '@chakra-ui/react';

import avatarImg from '~/assets/images/Avatar.png';
import logoImg from '~/assets/images/Logo-img.png';
import logoText from '~/assets/images/Logo-yee-daa.png';

const Header = () => (
    <Flex
        data-test-id='header'
        p='20px 56px 20px 16px'
        as='header'
        justify='space-between'
        mx='auto'
        align='center'
        bg='yellow.100'
        maxW='1920px'
        w='100%'
    >
        <Flex align='center' gap={128}>
            {/* Логотип со ссылкой */}
            <Link href='/' _hover={{ textDecoration: 'none' }}>
                <Flex gap={1} align='flex-end'>
                    <Image src={logoImg} alt='Logo' w='33px' h='32px' />
                    <Image src={logoText} alt='Logo text' w='97px' h='26px' />
                </Flex>
            </Link>

            {/* Просто ссылка "Главная" */}
            <Link href='/' fontSize='md' color='gray.700' _hover={{ textDecoration: 'underline' }}>
                Главная
            </Link>
        </Flex>

        {/* Блок с аватаром и текстом */}
        <Flex align='center'>
            <Avatar
                src={avatarImg}
                size='md'
                w='48px'
                h='48px'
                name='Екатерина Константинопольская'
            />
            <Box ml={3} textAlign='left'>
                <Text fontWeight='bold'>Екатерина Константинопольская</Text>
                <Text fontSize='sm' color='gray.700'>
                    @bake_and_pie
                </Text>
            </Box>
        </Flex>
    </Flex>
);

export default Header;
