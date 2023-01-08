import { useState, useEffect } from "react";

import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  VStack,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";

function SignupForm({ gotoPrevious }) {
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [inputState, setInputState] = useState({
    phoneNumber: "",
    name: "",
    password: "",
  });
  const toast = useToast({ position: "top" });

  const handleValuedInput = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    if (inputState.phoneNumber.length !== 10) {
      toast({
        title: `Invalid Phone Number. Enter Correct One`,
        status: "error",
        isClosable: true,
      });
      return;
    } else if (inputState.name.length === 0) {
      toast({
        title: `Name is required`,
        status: "warning",
        isClosable: true,
      });
      return;
    } else if (inputState.password.length < 4) {
      toast({
        title: `Password should be over 4 characters.`,
        status: "error",
        isClosable: true,
      });
      return;
    } else if (hasAlreadyRegistered()) {
      toast({
        title: `This Phone Number already exist in our database.`,
        status: "success",
        isClosable: true,
      });
      gotoPrevious();
      return;
    } else {
      postData();
    }
  };

  const hasAlreadyRegistered = () => {
    let present = false;
    allUsers.map(({ phoneNumber }) => {
      if (phoneNumber === inputState.phoneNumber) {
        present = true;
      }
    });
    return present;
  };

  const postData = async () => {
    try {
      setLoading(true);
      let res = await fetch(`https://mock-server-app-6y5e.onrender.com/regUser`, {
        method: "POST",
        body: JSON.stringify(inputState),
        headers: { "Content-type": "application/json" },
      });
      setTimeout(() => {
        setLoading(false);
        setSubmissionStatus(true);
        setTimeout(() => {
          setSubmissionStatus(false);
          gotoPrevious();
        }, 2000);
      }, 2000);
    } catch (error) {
      console.log(error);
      toast({
        title: `There was an error processing your request`,
        status: "error",
        isClosable: true,
      });
    }
  };
  
  const getAllUser = async () => {
    try {
      let res = await fetch(`https://mock-server-app-6y5e.onrender.com/regUser`);
      let resData = await res.json();
      setAllUsers(resData);
    } catch (error) {
      console.log(error);
      toast({
        title: `There was an error processing your request`,
        status: "error",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  if (submissionStatus) {
    return (
      <>
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="1g">
            Success!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Congratulation, Your Account has been successfully created.
          </AlertDescription>
        </Alert>
      </>
    );
  }

  return (
    <div>
      <VStack spacing={6} align="flex-start">
        <FormControl isInvalid={inputState.phoneNumber.length > 10}>
          <InputGroup>
            <InputLeftAddon bg={"#3182ce"} color="white" children="+91 " />
            <Input
              type="number"
              placeholder="Mobile Number"
              name="phoneNumber"
              onChange={handleValuedInput}
            />
          </InputGroup>
          {inputState.phoneNumber.length === 0 ? (
            <FormHelperText>* Phone No is required</FormHelperText>
          ) : (
            <FormErrorMessage>Invalid Phone Number</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <Input
            type={"text"}
            placeholder="Enter Your Name"
            name="name"
            onChange={handleValuedInput}
          />
        </FormControl>

        <FormControl
          isInvalid={
            inputState.password.length > 0 && inputState.password.length < 4
          }
        >
          <Input
            type={"password"}
            placeholder="Enter Password"
            maxlength="10"
            name="password"
            onChange={handleValuedInput}
          ></Input>

          <FormErrorMessage>
            {"Password should be over 4 characters."}
          </FormErrorMessage>
        </FormControl>
        <Button
          isLoading={loading}
          loadingText="Submitting"
          type="submit"
          colorScheme="blue"
          w="full"
          onClick={handleFormSubmit}
        >
          Sign up
        </Button>
      </VStack>
    </div>
  );
}
export default SignupForm;
