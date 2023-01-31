<?php //require ('../mysqli_bothams.php'); // Connect to the db. 
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html lang="en">
<!-- Head Start -->
<?php include '_includes/markup/head.php'; ?>
<!-- Head End -->

<body>
    <!--[if lt IE 7]>
      <p class="browsehappy">
        You are using an <strong>outdated</strong> browser. Please
        <a href="#">upgrade your browser</a> to improve your experience.
      </p>
    <![endif]-->
    <!--begin::App-->

    <!-- Nav Start -->
    <?php include '_includes/markup/header.php'; ?>
    <!-- Nav End -->

    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <!-- Sidebar Start -->
                <?php include '_includes/markup/nav/sidebar.php'; ?>

                <!-- Sidebar End -->
            </nav>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <!-- Main content Start -->
                <?php include '_includes/markup/main/dashboard.php'; ?>
                <!-- Main content Start -->
            </main>
        </div>
    </div>

    <!-- Footer Start -->
    <?php include '_includes/markup/footer.php'; ?>
    <!-- Footer End -->

    <!-- Script tags Start -->
    <?php include '_includes/markup/scripts.php'; ?>
    <!-- Script tags End -->
</body>

</html>
