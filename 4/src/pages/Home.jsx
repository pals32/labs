// import React, { useState, useEffect } from 'react';
// import {
//   chakra,
//   Button,
//   List,
//   ListItem,
//   Heading,
//   Flex,
//   Input,
//   Text,
//   Select,
// } from '@chakra-ui/react';

// export const Home = () => {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState('');
//   const [description, setDescription] = useState('');
//   const [sortOption, setSortOption] = useState('default'); // 'default' or 'alphabetical'

//   const createTodoHandler = (text, description) => {
//     setTodos((prevState) => [
//       ...prevState,
//       { id: Date.now(), text, description },
//     ]);
//     setText('');
//     setDescription('');
//   };

//   const removeTodoHandler = (id) => {
//     setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
//   };

//   const sortedTodos = todos.slice().sort((a, b) => {
//     if (sortOption === 'alphabetical') {
//       return a.text.localeCompare(b.text);
//     }
//     return 0; // Default: no sorting
//   });

//   return (
//     <Flex
//       flexDirection="column"
//       h="100vh"
//       w="100vw"
//       m="1rem"
//       gap="1rem"
//       alignItems="center"
//     >
//       <Heading textTransform="uppercase">Todo List</Heading>
//       <List
//         h="60vh"
//         w="70vw"
//         display="flex"
//         flexDirection="column"
//         overflowY="scroll"
//         border="2px solid black"
//         borderRadius="md"
//         p="10px"
//       >
//         {sortedTodos.map((todo) => (
//           <ListItem
//             key={todo.id}
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderBottom="1px solid gray"
//             py="8px"
//           >
//             <Text>{`${todo.text} - ${todo.description || ''}`}</Text>
//             <Button
//               onClick={() => removeTodoHandler(todo.id)}
//               background="red.500"
//               color="white"
//               _hover={{
//                 background: 'red.600',
//               }}
//             >
//               Удалить
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//       <chakra.form
//         onSubmit={(e) => {
//           e.preventDefault();
//           createTodoHandler(text, description);
//         }}
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         gap="20px"
//       >
//         <Input
//           placeholder="Напишите задачу..."
//           maxLength={80}
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           w="300px"
//           h="32px"
//         />
//         <Input
//           placeholder="Описание задачи..."
//           maxLength={200}
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           w="300px"
//           h="32px"
//         />
//         <Button
//           isDisabled={!text.trim().length}
//           type="submit"
//           w="fit-content"
//           background="blue.500"
//           color="white"
//           _hover={{
//             background: 'blue.600',
//           }}
//         >
//           Добавить задачу
//         </Button>
//         <Select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           w="120px"
//         >
//           <option value="default">Сортировка</option>
//           <option value="alphabetical">По алфавиту</option>
//         </Select>
//       </chakra.form>
//     </Flex>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import {
//   chakra,
//   Button,
//   List,
//   ListItem,
//   Heading,
//   Flex,
//   Input,
//   Text,
// } from '@chakra-ui/react';

// export const Home = () => {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     loadTodosFromFile();
//   }, []);

//   const createTodoHandler = (text) => {
//     const newTodo = { id: Date.now(), text };
//     setTodos((prevState) => [...prevState, newTodo]);
//     setText('');
//   };

//   const removeTodoHandler = (id) => {
//     const filteredTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(filteredTodos);
//   };

//   const saveTodosToFile = (todosToSave) => {
//     const todosText = JSON.stringify(todosToSave);
//     const blob = new Blob([todosText], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'todos.txt';
//     link.click();
//     URL.revokeObjectURL(url);
//   };

//   const loadTodosFromFile = () => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       try {
//         setTodos(JSON.parse(e.target.result));
//       } catch (error) {
//         console.error('Error loading todos from file:', error);
//       }
//     };

//     const fileInput = document.createElement('input');
//     fileInput.type = 'file';
//     fileInput.accept = '.txt';
//     fileInput.addEventListener('change', (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         reader.readAsText(file);
//       }
//     });

//     fileInput.click();
//   };

//   return (
//     <Flex
//       flexDirection="column"
//       h="100vh"
//       w="100vw"
//       m="1rem"
//       gap="1rem"
//       alignItems="center"
//     >
//       <Heading textTransform="uppercase">Todo List</Heading>
//       <List
//         h="60vh"
//         w="70vw"
//         display="flex"
//         flexDirection="column"
//         overflowY="scroll"
//         border="2px solid black"
//         borderRadius="md"
//         p="10px"
//       >
//         {todos.map((todo) => (
//           <ListItem
//             key={todo.id}
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderBottom="1px solid gray"
//             py="8px"
//           >
//             <Text>{todo.text}</Text>
//             <Button
//               onClick={() => removeTodoHandler(todo.id)}
//               background="red.500"
//               color="white"
//               _hover={{
//                 background: 'red.600',
//               }}
//             >
//               Удалить
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//       <chakra.form
//         onSubmit={(e) => {
//           e.preventDefault();
//           createTodoHandler(text);
//         }}
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         gap="20px"
//       >
//         <Input
//           placeholder="Напишите задачу..."
//           maxLength={80}
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           w="300px"
//           h="32px"
//         />
//         <Button
//           isDisabled={!text.trim().length}
//           type="submit"
//           w="fit-content"
//           background="blue.500"
//           color="white"
//           _hover={{
//             background: 'blue.600',
//           }}
//         >
//           Добавить задачу
//         </Button>
//         {/* Кнопка для загрузки задач из файла */}
//         <Button
//           onClick={loadTodosFromFile}
//           w="fit-content"
//           background="green.500"
//           color="white"
//           _hover={{
//             background: 'green.600',
//           }}
//         >
//           Загрузить из файла
//         </Button>
//         {/* Кнопка для сохранения задач в файл */}
//         <Button
//           onClick={() => saveTodosToFile(todos)}
//           w="fit-content"
//           background="purple.500"
//           color="white"
//           _hover={{
//             background: 'purple.600',
//           }}
//         >
//           Сохранить в файл
//         </Button>
//       </chakra.form>
//     </Flex>
//   );
// };
import React, { useState } from 'react';
import { chakra, Button, List, ListItem, Heading, Flex, Input, Text } from '@chakra-ui/react';
import MySelect from './select'; // Поменяйте путь на ваш фактический путь к MySelect

export const Home = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    // const [searchQuery, setSearchQuery] = useState('')

    const sortTodos = (sort) => {
        setSelectedSort(sort);
        setTodos([...todos].sort((a, b) => a[sort].localeCompare(b[sort])));
    };

    const createTodoHandler = (text) => {
        setTodos((prevState) => [...prevState, { id: Date.now(), text }]);
        setText('');
    };

    const removeTodoHandler = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    };

    return (
        <Flex
        flexDirection="column"
        h="100vh"
        w="100vw"
        m="1rem"
        gap="1rem"
        alignItems="center"
        >
        <Heading textTransform="uppercase">Todo List</Heading>
        <List
            h="60vh"
            w="70vw"
            display="flex"
            flexDirection="column"
            overflowY="scroll"
            border="2px solid black"
            borderRadius="md"
            p="10px"
        >
            {todos.map((todo) => (
            <ListItem
                key={todo.id}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom="1px solid gray"
                py="8px"
            >
                <Text>{todo.text}</Text>
                <Button
                onClick={() => removeTodoHandler(todo.id)}
                background="red.500"
                color="white"
                _hover={{
                    background: 'red.600',
                }}
                >
                Удалить
                </Button>
            </ListItem>
            ))}
        </List>
        <chakra.form
            onSubmit={(e) => {
            e.preventDefault(); // Без перезагрузки приложения после добавления задачи
            createTodoHandler(text);
            }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
        >   <Input
                value={searchQuery}
                onChange= {e => setSearchQuery(e.target)}
            />
            <Input
            placeholder="Напишите задачу..."
            maxLength={80}
            value={text}
            onChange={(e) => setText(e.target.value)}
            w="300px"
            h="32px"
            />
            <Button
            isDisabled={!text.trim().length}
            type="submit"
            w="fit-content"
            background="blue.500"
            color="white"
            _hover={{
                background: 'blue.600',
            }}
            >
            Добавить задачу
            </Button>
            <MySelect
                selectedValue={selectedSort}
                onChange={(sort) => sortTodos(sort)}
                defaultValue="Сортировка"
                options={[
                    { value: 'text', name: 'По названию' },
                ]}
            />
        </chakra.form>
        </Flex>
    );
};
