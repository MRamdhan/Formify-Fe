<template>
    <Nav />
    <main>
        <div class="hero py-5 bg-light">
            <div class="container text-center">
                <h2>{{ $route.params.slug }}</h2>
                <div class="text-muted mb-4">
                    To save web tech members biodata
                </div>
                <div>
                    <div>
                        <small>For user domains</small>
                    </div>
                    <small><span class="text-primary">webtech.id, webtech.org</span></small>
                </div>
            </div>
        </div>

        <div class="py-5">
            <div class="container">

                <div class="row justify-content-center ">
                    <div class="col-lg-5 col-md-6">
                        <div class="input-group mb-5">
                            <input type="text" class="form-control form-link" readonly
                                value="http://localhost:8080/forms/biodata" />
                            <a href="/submit" class="btn btn-primary">Copy</a>
                        </div>

                        <ul class="nav nav-tabs mb-2 justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link active" href="detail-form.html">Questions</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="responses.html">Responses</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-6">

                        <div class="question-item  card card-default my-4">
                            <div class="card-body">
                                <div class="form-group my-3">
                                    <input type="text" placeholder="Question" class="form-control" name="name" value="Name"
                                        disabled />
                                </div>

                                <div class="form-group my-3">
                                    <select name="choice_type" class="form-select" disabled>
                                        <option>Choice Type</option>
                                        <option selected value="short answer">Short Answer</option>
                                        <option value="paragraph">Paragraph</option>
                                        <option value="multiple choice">Multiple Choice</option>
                                        <option value="dropdown">Dropdown</option>
                                        <option value="checkboxes">Checkboxes</option>
                                    </select>
                                </div>
                                <div class="form-check form-switch" aria-colspan="my-3">
                                    <input class="form-check-input" type="checkbox" role="switch" id="required" disabled
                                        checked />
                                    <label class="form-check-label" for="required">Required</label>
                                </div>
                                <div class="mt-3">
                                    <button type="submit" class="btn btn-outline-danger">Remove</button>
                                </div>
                            </div>
                        </div>

                        <div class="question-item card card-default my-4">
                            <div class="card-body">
                                <div class="form-group my-3">
                                    <input type="text" placeholder="Question" class="form-control" name="name"
                                        value="Address" disabled />
                                </div>

                                <div class="form-group my-3">
                                    <select name="choice_type" class="form-select" disabled>
                                        <option>Choice Type</option>
                                        <option value="short answer">Short Answer</option>
                                        <option selected value="paragraph">Paragraph</option>
                                        <option value="multiple choice">Multiple Choice</option>
                                        <option value="dropdown">Dropdown</option>
                                        <option value="checkboxes">Checkboxes</option>
                                    </select>
                                </div>
                                <div class="form-check form-switch" aria-colspan="my-3">
                                    <input class="form-check-input" type="checkbox" role="switch" id="required" />
                                    <label class="form-check-label" for="required">Required</label>
                                </div>
                                <div class="mt-3">
                                    <button type="submit" class="btn btn-outline-danger">Remove</button>
                                </div>
                            </div>
                        </div>

                        <div class="question-item card card-default my-4">
                            <div class="card-body">
                                <div class="form-group my-3">
                                    <input type="text" placeholder="Question" class="form-control" name="name" value="Sex"
                                        disabled />
                                </div>

                                <div class="form-group my-3">
                                    <select name="choice_type" class="form-select" disabled>
                                        <option>Choice Type</option>
                                        <option value="short answer">Short Answer</option>
                                        <option value="paragraph">Paragraph</option>
                                        <option selected value="multiple choice">Multiple Choice</option>
                                        <option value="dropdown">Dropdown</option>
                                        <option value="checkboxes">Checkboxes</option>
                                    </select>
                                </div>
                                <div class="form-group my-3">
                                    <textarea placeholder="Choices" class="form-control" name="choices" rows="4"
                                        disabled>Male,Female,Others</textarea>
                                    <div class="form-text">
                                        Separate choices using comma ",".
                                    </div>
                                </div>
                                <div class="form-check form-switch" aria-colspan="my-3">
                                    <input class="form-check-input" type="checkbox" role="switch" id="required" checked
                                        disabled />
                                    <label class="form-check-label" for="required">Required</label>
                                </div>
                                <div class="mt-3">
                                    <button type="submit" class="btn btn-outline-danger">Remove</button>
                                </div>
                            </div>
                        </div>

                        <div class="question-item card card-default my-4">
                            <div class="card-body">
                                <div class="form-group my-3">
                                    <input type="text" placeholder="Question" class="form-control" name="name"
                                        value="Born Date" disabled />
                                </div>

                                <div class="form-group my-3">
                                    <select name="chocie_type" class="form-select" disabled>
                                        <option>Choice Type</option>
                                        <option value="short answer">Short Answer</option>
                                        <option value="paragraph">Paragraph</option>
                                        <option selected value="date">Date</option>
                                        <option value="multiple choice">Multiple Choice</option>
                                        <option value="dropdown">Dropdown</option>
                                        <option value="checkboxes">Checkboxes</option>
                                    </select>
                                </div>
                                <div class="form-check form-switch" aria-colspan="my-3">
                                    <input class="form-check-input" type="checkbox" role="switch" id="required" checked
                                        disabled />
                                    <label class="form-check-label" for="required">Required</label>
                                </div>
                                <div class="mt-3">
                                    <button type="submit" class="btn btn-outline-danger">Remove</button>
                                </div>
                            </div>
                        </div>

                        <div class="question-item card card-default my-4">
                            <div class="card-body">
                                <div class="form-group my-3">
                                    <input type="text" placeholder="Question" class="form-control" name="name"
                                        value="Hobbies" disabled />
                                </div>

                                <div class="form-group my-3">
                                    <select name="choice_type" class="form-select" disabled>
                                        <option>Choice Type</option>
                                        <option value="short answer">Short Answer</option>
                                        <option value="paragraph">Paragraph</option>
                                        <option value="multiple choice">Multiple Choice</option>
                                        <option value="dropdown">Dropdown</option>
                                        <option selected value="checkboxes">Checkboxes</option>
                                    </select>
                                </div>
                                <div class="form-group my-3">
                                    <textarea placeholder="Choices" class="form-control" name="choices" rows="4"
                                        disabled>Football,Guitar,Coding,Watching,Traveling</textarea>
                                    <div class="form-text">
                                        Separate choices using comma ",".
                                    </div>
                                </div>
                                <div class="form-check form-switch" aria-colspan="my-3">
                                    <input class="form-check-input" type="checkbox" role="switch" id="required" disabled />
                                    <label class="form-check-label" for="required">Required</label>
                                </div>
                                <div class="mt-3">
                                    <button type="submit" class="btn btn-outline-danger">Remove</button>
                                </div>
                            </div>
                        </div>

                        <div class="question-item card card-default my-4">
                            <div class="card-body">
                                <form>
                                    <div class="form-group my-3">
                                        <input type="text" placeholder="Question" class="form-control" name="name"
                                            value="" />
                                    </div>

                                    <div class="form-group my-3">
                                        <select name="choice_type" class="form-select">
                                            <option selected>Choice Type</option>
                                            <option value="short answer">Short Answer</option>
                                            <option value="paragraph">Paragraph</option>
                                            <option value="date">Date</option>
                                            <option value="multiple choice">Multiple Choice</option>
                                            <option value="dropdown">Dropdown</option>
                                            <option value="checkboxes">Checkboxes</option>
                                        </select>
                                    </div>
                                    <div class="form-check form-switch" aria-colspan="my-3">
                                        <input class="form-check-input" type="checkbox" role="switch" id="required" />
                                        <label class="form-check-label" for="required">Required</label>
                                    </div>
                                    <div class="mt-3">
                                        <button type="submit" class="btn btn-outline-primary">Save</button>
                                    </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</main>
</template>

<script setup>
import Nav from '../components/Nav.vue'
</script>