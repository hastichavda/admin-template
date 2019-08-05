<template>
  <div class="container">
    <div class="row">
      <div class="container">
        <h1>Vuelidate Form validation</h1>
        <form @submit.prevent="handleSubmit()">
          <div class="form-group">
            <label for="Fname">Name:</label>
            <input
              type="text"
              v-model="user.Fname"
              class="form-control"
              id="Fname"
              name="Fname"
              :class="{ 'is-invalid': submitted && $v.user.Fname.$error }"
              placeholder="Name"
            />
            <div
              v-if="submitted && $v.user.Fname.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.Fname.required">
                Name is required
              </span>
              <span v-if="!$v.user.Fname.alpha">
                Name doesn't contain number
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="Email">Email</label>
            <input
              type="Email"
              v-model="user.Email"
              id="Email"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.Email.$error }"
              placeholder="email"
            />
            <div
              v-if="submitted && $v.user.Email.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.Email.required">Email is required</span>
              <span v-if="!$v.user.Email.email">Email is invalid</span>
            </div>
          </div>
          <div class="form-group ">
            <label for="Password">Password</label>
            <input
              type="password"
              v-model="user.Password"
              id="Password"
              name="Password"
              class="form-control "
              :class="{ 'is-invalid': submitted && $v.user.Password.$error }"
              placeholder="Password"
            />
            <div
              v-if="submitted && $v.user.Password.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.Password.required">
                Password is required
              </span>
              <span v-if="!$v.user.Password.minLength">
                Password must be at least 6 characters
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="ConfirmPassword">Confirm Password</label>
            <input
              type="password"
              v-model="user.ConfirmPassword"
              id="ConfirmPassword"
              name="ConfirmPassword"
              class="form-control"
              :class="{
                'is-invalid': submitted && $v.user.ConfirmPassword.$error
              }"
              placeholder="Confirm Password"
            />
            <div
              v-if="submitted && $v.user.ConfirmPassword.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.ConfirmPassword.required">
                Confirm Password is required
              </span>
              <span v-if="!$v.user.ConfirmPassword.sameAsPassword">
                Password must match
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="Contact">Contact</label>
            <input
              type="text"
              v-model="user.Contact"
              id="Contact"
              name="Contact"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.Contact.$error }"
              placeholder="Contact"
            />
            <div
              v-if="submitted && $v.user.Contact.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.user.Contact.required.numeric">
                Contact is required doesn't contain text
              </span>
              <span v-if="!$v.user.Contact.required.numeric">
                Contact must be 10 number
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="Address">Address</label>
            <input
              type="text"
              v-model="user.Address"
              id="Address"
              name="Address"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.Address.$error }"
              placeholder="Address"
            />
            <div
              v-if="submitted && !$v.user.Address.required"
              class="invalid-feedback"
            >
              Address is required
            </div>
            <div></div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  sameAs,
  alpha,
  numeric
} from "vuelidate/lib/validators/";
export default {
  name: "app",
  data() {
    return {
      user: {
        Fname: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        Contact: "",
        Address: ""
      },
      submitted: false
    };
  },
  validations: {
    user: {
      Fname: { required, alpha },
      Email: { required, email },
      Password: { required, minLength: minLength(6) },
      ConfirmPassword: { required, sameAsPassword: sameAs("Password") },
      Contact: { required, minLength: minLength(10), numeric },
      Address: { required }
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert("Success!!! :- \n\n" + JSON.stringify(this.user));
    }
  }
};
</script>

<style>
.invalid-feedback {
  color: red;
}
.is-invalid {
  border: 1px solid red;
}
</style>
