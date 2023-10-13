function CourseDetails() {
  return (
    <div class="wd-flex-grow-1">
            <h2>Course Details</h2>
            <div class="wd-edit-inputs container">
                <div class="row">
                    <div class="col">
                        <div class="float-end my-2">Image</div>
                    </div>
                    <div class="col">
                        <input type="file" name="image" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Name:</div>
                </div>
                <div class="col">
                    <label>CS4550 12631 Web Development SEC 01 Fall 2023 [BOS-1-TR]</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Course Code:</div>
                </div>
                <div class="col">
                    <label>CS4550,12631.202410</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Blueprint Course</div>
                </div>
                <div class="col">
                    <label>No</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Course Template</div>
                </div>
                <div class="col">
                    <label>Enable course as a Course Template</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">TimeZone:</div>
                </div>
                <div class="col">
                    <select>
                        <option value="est">Eastern Time (US & Canada) (-05:00/-04:00)</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="float-end my-2">SIS ID</div>
                </div>
                <div class="col">
                    <label>CS4550,12631.202410</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Subaccount</div>
                </div>
                <div class="col">
                    <label><a href="#">CS Undergrad</a></label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Term</div>
                </div>
                <div class="col">
                    <label>202410_1 Fall 2023 Semester Full Term</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Participation</div>
                </div>
                <div class="col">
                    <select>
                        <option value="Term">Term</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <div class="float-end my-2">Course participation is limited to term start and end dates</div>
                </div>

            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Start</div>
                </div>
                <div class="col">
                    <input type="date" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">End</div>
                </div>
                <div class="col">
                    <input type="date" />
                </div>
            </div>

            <div class="row">
                <div class="col">

                </div>
                <div class="col">
                    <input type="checkbox" /><label>Restrict students from viewing course before term start
                        date</label><br />

                </div>
            </div>
            <div class="row">

                <div class="col">
                </div>
                <div class="col">
                    <div class="float-end my-2"><input type="checkbox" /><label>Restrict students from viewing course
                            after term end date</label><br /></div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Default Due Time</div>
                </div>
                <div class="col">
                    <select>
                        <option value="midnight">Account default (11:59pm)</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    
                </div>
                <div class="col"><div class="float-end my-2">This influences the user interface for setting due dates. It does not
                    change the time due for any existing assignments.</div></div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Language</div>
                </div>
                <div class="col">
                    <select>
                        <option value="english">Not set</option>
                    </select>
                </div>
            </div>
            <div class="row">
                
                <div class="col"></div>
                <div class="col">
                    <div class="my-2">This is will override any user/system language preferences. This is only
                        recommended for foreign language courses.</div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">File storage</div>
                </div>
                <div class="col">
                    <label>10000 megabytes</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Large Course</div>
                </div>
                <div class="col">
                    <input type="checkbox" />
                    <label>Launch SpeedGrader Filtered by Student Group</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Grading Scheme</div>
                </div>
                <div class="col">
                    <input type="checkbox" />
                    <label>Enable Course Grading Scheme</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">License</div>
                </div>
                <div class="col">
                    <select>
                        <option value="private">Private (Copyrighted)</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">File Copyright</div>
                </div>
                <div class="col">
                    <input type="checkbox" />
                    <label>Copyright and license information must be provided for files before they are
                        published</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Visibility</div>
                </div>
                <div class="col">
                    <label>If you need to make your course public please contact your administrator/support</label>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <select>
                        <option value="course">Course</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <input type="checkbox" /><label>Include this course in the public course index</label><br />
                </div>
            </div>
            

            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Format</div>
                </div>
                <div class="col">
                    <select>
                        <option value="on-campus">On Campus</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Mastery Paths</div>
                </div>
                <div class="col">
                    <input type="checkbox" />
                    <label>Enable Individual learning paths for students based on assessment</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="float-end my-2">Description</div>
                </div>
                <div class="col">
                    <textarea></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <a href="#">More Options</a>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <button class="btn btn-danger">Update Course Details</button>
                </div>
            </div>
            



        </div>
  );
}
export default CourseDetails;

