import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createCustomer } from 'apiSdk/customers';
import { customerValidationSchema } from 'validationSchema/customers';
import { UserInterface } from 'interfaces/user';
import { GymInterface } from 'interfaces/gym';
import { TrainerInterface } from 'interfaces/trainer';
import { getUsers } from 'apiSdk/users';
import { getGyms } from 'apiSdk/gyms';
import { getTrainers } from 'apiSdk/trainers';
import { CustomerInterface } from 'interfaces/customer';

function CustomerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: CustomerInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createCustomer(values);
      resetForm();
      router.push('/customers');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<CustomerInterface>({
    initialValues: {
      membership_start_date: new Date(new Date().toDateString()),
      membership_end_date: new Date(new Date().toDateString()),
      preferred_workout_time: new Date(new Date().toDateString()),
      user_id: (router.query.user_id as string) ?? null,
      gym_id: (router.query.gym_id as string) ?? null,
      preferred_trainer_id: (router.query.preferred_trainer_id as string) ?? null,
    },
    validationSchema: customerValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Customers',
              link: '/customers',
            },
            {
              label: 'Create Customer',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Customer
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="membership_start_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Membership Start Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.membership_start_date ? new Date(formik.values?.membership_start_date) : null}
              onChange={(value: Date) => formik.setFieldValue('membership_start_date', value)}
            />
          </FormControl>
          <FormControl id="membership_end_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Membership End Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.membership_end_date ? new Date(formik.values?.membership_end_date) : null}
              onChange={(value: Date) => formik.setFieldValue('membership_end_date', value)}
            />
          </FormControl>
          <FormControl id="preferred_workout_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Preferred Workout Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.preferred_workout_time ? new Date(formik.values?.preferred_workout_time) : null}
              onChange={(value: Date) => formik.setFieldValue('preferred_workout_time', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<GymInterface>
            formik={formik}
            name={'gym_id'}
            label={'Select Gym'}
            placeholder={'Select Gym'}
            fetcher={getGyms}
            labelField={'name'}
          />
          <AsyncSelect<TrainerInterface>
            formik={formik}
            name={'preferred_trainer_id'}
            label={'Select Trainer'}
            placeholder={'Select Trainer'}
            fetcher={getTrainers}
            labelField={'specialty'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/customers')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'customer',
    operation: AccessOperationEnum.CREATE,
  }),
)(CustomerCreatePage);
